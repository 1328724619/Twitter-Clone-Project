package com.Tian.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Tian.dto.LikeDto;
import com.Tian.dto.mapper.LikeDtoMapper;
import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.Like;
import com.Tian.model.User;
import com.Tian.service.LikeService;
import com.Tian.service.UserService;

@RestController
@RequestMapping("/api")
public class LikeController {

	@Autowired
	private UserService userService;
	@Autowired
	private LikeService likeService;
	
	@PostMapping("/posts/{postId}/like")
	public ResponseEntity<LikeDto> likePost(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User user = userService.findUserProfileByJwt(jwt);
		Like like = likeService.likePost(postId, user);
		
		LikeDto likeDto = LikeDtoMapper.toLikeDto(like);
		
		return new ResponseEntity<LikeDto>(likeDto, HttpStatus.CREATED);
	}
	
	@GetMapping("/posts/{postId}/likes")
	public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User user = userService.findUserProfileByJwt(jwt);
		List<Like> likes = likeService.getAllLikes(postId);
		
		List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(likes);
		
		return new ResponseEntity<>(likeDtos, HttpStatus.OK);
	}
}
