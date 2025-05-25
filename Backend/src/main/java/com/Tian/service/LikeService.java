package com.Tian.service;

import java.util.List;

import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.Like;
import com.Tian.model.User;

public interface LikeService {

	public Like likePost(Long postId, User user) throws UserException, PostException;
	
	public List<Like> getAllLikes(Long postId) throws PostException;
}
