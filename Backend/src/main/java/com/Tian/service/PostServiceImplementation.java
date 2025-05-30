package com.Tian.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.Post;
import com.Tian.model.User;
import com.Tian.repository.PostRepository;
import com.Tian.request.PostReplyRequest;

@Service
public class PostServiceImplementation implements PostService{

	@Autowired
	private PostRepository postRepository;
	
	@Override
	public Post createPost(Post req, User users) throws UserException {
		
		Post post = new Post();
		post.setContent(req.getContent());
		post.setCreatedAt(LocalDateTime.now());
		post.setImage(req.getImage());
		post.setUser(users);
		post.setReply(false);
		post.setPost(true);
		post.setVideo(req.getVideo());
		
		
		return postRepository.save(post);
	}

	@Override
	public List<Post> findAllPost() {
				
		return postRepository.findAllByIsPostTrueOrderByCreatedAtDesc();
	}

	@Override
	public Post rePost(Long postId, User user) throws UserException, PostException {
		Post post = findById(postId);
		
		if(post.getRepostUser().contains(user)) {
			post.getRepostUser().remove(user);
		}
		else {
			post.getRepostUser().add(user);
		}
		return postRepository.save(post);
	}

	@Override
	public Post findById(Long postId) throws PostException {
		Post post = postRepository.findById(postId).orElseThrow(()->new PostException("Post not found with id: " + postId));
		
		
		return post;
	}

	@Override
	public void deletePostById(Long postId, Long userId) throws PostException, UserException {

		Post post = findById(postId);
		
		if(!userId.equals(post.getUser().getId())) {
			throw new UserException("You can't delete another user's post");
		}
		
		postRepository.deleteById(post.getId());
	}

	@Override
	public Post removeFromRepost(Long postId, User user) throws PostException, UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post createdReply(PostReplyRequest req, User user) throws PostException {
		
		Post post = new Post();
		post.setContent(req.getContent());
		post.setCreatedAt(LocalDateTime.now());
		post.setImage(req.getImage());
		post.setUser(user);
		post.setReply(true);
		post.setPost(false);
		post.setReplyFor(post);
		
		return replyFor;
	}

	@Override
	public List<Post> getUserPost(User user) {

		return postRepository.findByRepostUserContainsOrUser_IdAndIsPostTrueOrderByCreatedAtDesc(user, user.getId());
	}

	@Override
	public List<Post> findByLikesContainsUser(User user) {

		return postRepository.findByLikesUser_id(user.getId());
	}

}
