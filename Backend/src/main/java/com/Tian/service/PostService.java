package com.Tian.service;

import java.util.List;

import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.Post;
import com.Tian.model.User;
import com.Tian.request.PostReplyRequest;

public interface PostService {
	
	public Post createPost(Post req, User users) throws UserException; 
	public List<Post> findAllPost();
	public Post rePost(Long postId, User user) throws UserException, PostException;
	public Post findById(Long postId) throws PostException;
	public void deletePostById(Long postId, Long userId) throws PostException, UserException;
	public Post removeFromRepost(Long postId, User user) throws PostException, UserException;
	public Post createdReply(PostReplyRequest req, User user) throws PostException;
	public List<Post> getUserPost(User user);
	public List<Post> findByLikesContainsUser(User user); 
	
}
