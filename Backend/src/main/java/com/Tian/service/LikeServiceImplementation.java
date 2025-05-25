package com.Tian.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.Like;
import com.Tian.model.Post;
import com.Tian.model.User;
import com.Tian.repository.LikeRepository;
import com.Tian.repository.PostRepository;

@Service
public class LikeServiceImplementation implements LikeService {

	@Autowired
	private LikeRepository likeRepository;

	@Autowired
	private PostRepository postRepository;

	@Override
	public Like likePost(Long postId, User user) throws UserException, PostException {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new PostException("Post not found with id: " + postId));

		Like existingLike = likeRepository.findByPostAndUser(post, user);

		if (existingLike != null) {
			likeRepository.delete(existingLike);
			return existingLike;
		}

		Like like = new Like();
		like.setPost(post);
		like.setUser(user);

		Like savedLike = likeRepository.save(like);

		return savedLike;
	}

	@Override
	public List<Like> getAllLikes(Long postId) throws PostException {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new PostException("Post not found with id: " + postId));

		List<Like> likes = likeRepository.findByPost(post);

		return likes;
	}

}
