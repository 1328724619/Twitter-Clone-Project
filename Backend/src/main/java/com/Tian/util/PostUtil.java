package com.Tian.util;

import com.Tian.model.Like;
import com.Tian.model.Post;
import com.Tian.model.User;

public class PostUtil {

	public final static boolean isLikedByReqUser(User reqUser, Post post) {
		for(Like like : post.getLikes()) {
			if(like.getUser().getId().equals(reqUser.getId())){
				return true;
			}
		}
		return false;
	}
	
	public final static boolean isRepostedByReqUser(User reqUser, Post post) {
		for(User user : post.getRepostUser()) {
			if(user.getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}
}
