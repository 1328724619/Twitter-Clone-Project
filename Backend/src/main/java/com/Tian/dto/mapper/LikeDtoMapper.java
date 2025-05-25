package com.Tian.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import com.Tian.dto.LikeDto;
import com.Tian.dto.PostDto;
import com.Tian.model.Like;

public class LikeDtoMapper {

	public static LikeDto toLikeDto(Like like) {
		LikeDto likeDto = new LikeDto();
		likeDto.setId(like.getId());
		likeDto.setUser(UserDtoMapper.toUserDto(like.getUser()));
		likeDto.setPost(PostDtoMapper.toPostDto(like.getPost()));
		return likeDto;
	}
	
	public static List<LikeDto> toLikeDtos(List<Like> likes) {
		List<LikeDto> likeDtos = new ArrayList<>();
		
		for(Like like : likes) {
			LikeDto likeDto = new LikeDto();
			likeDto.setId(like.getId());
			likeDto.setUser(UserDtoMapper.toUserDto(like.getUser()));
			likeDto.setPost(PostDtoMapper.toPostDto(like.getPost()));
			likeDtos.add(likeDto);
		}
		
		return likeDtos;
	}
}
