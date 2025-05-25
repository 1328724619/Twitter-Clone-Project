package com.Tian.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import com.Tian.dto.PostDto;
import com.Tian.dto.UserDto;
import com.Tian.model.Post;
import com.Tian.model.User;
import com.Tian.util.PostUtil;

public class PostDtoMapper {

	public static PostDto toPostDto(Post post, User reqUser) {
		PostDto postDto = new PostDto();
		postDto.setId(post.getId());
		postDto.setContent(post.getContent());
		postDto.setCreatedAt(post.getCreatedAt());
		postDto.setImage(post.getImage());
		postDto.setVideoString(post.getVideo());
		postDto.setUser(UserDtoMapper.toUserDto(post.getUser()));
		postDto.setLiked(post.getLikes().stream().anyMatch(like -> like.getUser().getId().equals(reqUser.getId())));
		postDto.setTotalLikes(post.getLikes().size());
		postDto.setTotalReplies(post.getReplyPosts().size());
		postDto.setReplyPosts(toPostDtos(post.getReplyPosts(), reqUser));
		return postDto;
	}
	
	public static List<PostDto> toPostDtos(List<Post> posts, User reqUser) {
		List<PostDto> postDtos = new ArrayList<>();
		
		for(Post post : posts) {
			PostDto postDto = new PostDto();
			postDto.setId(post.getId());
			postDto.setContent(post.getContent());
			postDto.setCreatedAt(post.getCreatedAt());
			postDto.setImage(post.getImage());
			postDto.setVideoString(post.getVideo());
			postDto.setUser(UserDtoMapper.toUserDto(post.getUser()));
			postDto.setLiked(post.getLikes().stream().anyMatch(like -> like.getUser().getId().equals(reqUser.getId())));
			postDto.setTotalLikes(post.getLikes().size());
			postDto.setTotalReplies(post.getReplyPosts().size());
			postDto.setReplyPosts(toPostDtos(post.getReplyPosts(), reqUser));
			postDtos.add(postDto);
		}
		
		return postDtos;
	}

	private static PostDto toReplyPostDto(Post post, User reqUser) {

		
		UserDto user = UserDtoMapper.toUserDto(post.getUser());
		
		boolean isLiked = PostUtil.isLikedByReqUser(reqUser, post);
		boolean isReposted = PostUtil.isRepostedByReqUser(reqUser, post);
		
		List<Long> repostUserId = new ArrayList<>();
		
		for(User user1 : post.getRepostUser()) {
			repostUserId.add(user1.getId());
		}
		
		PostDto postDto = new PostDto();
		postDto.setId(post.getId());
		postDto.setContent(post.getContent());
		postDto.setCreatedAt(post.getCreatedAt());
		postDto.setImage(post.getImage());
		postDto.setTotalLikes(post.getTotalLikes().size());
		postDto.setTotalReplies(post.getReplyPosts().size());
		postDto.setUser(user);
		postDto.setLiked(isLiked);
		postDto.setRepost(isReposted);
		postDto.setRepostUserId(repostUserId);
		postDto.setVideo(post.getVideo());
		
		return postDto;
	}
}
