package com.Tian.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Tian.model.Post;
import com.Tian.dto.PostDto;
import com.Tian.dto.mapper.PostDtoMapper;
import com.Tian.exception.PostException;
import com.Tian.exception.UserException;
import com.Tian.model.User;
import com.Tian.request.PostReplyRequest;
import com.Tian.response.ApiResponse;
import com.Tian.service.PostService;
import com.Tian.service.UserService;

@RestController
@RequestMapping("/api/posts")
public class PostController {

	@Autowired
	private PostService postService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<PostDto> createPost(@RequestBody Post req, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User user = userService.findUserProfileByJwt(jwt);
		
		Post post = postService.createPost(req, user);
		
		PostDto postDto = PostDtoMapper.toPostDto(post, user);
		
		return new ResponseEntity<>(postDto, HttpStatus.CREATED);
	}
	
	@GetMapping("/{postId}") 
	public ResponseEntity<PostDto> findPostById(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		
		User user = userService.findUserProfileByJwt(jwt);
		Post post = postService.findById(postId);
		PostDto postDto = PostDtoMapper.toPostDto(post, user);
		
		return new ResponseEntity<>(postDto, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{postId}")
	public ResponseEntity<ApiResponse> deletePost(@PathVariable Long postId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		User user = userService.findUserProfileByJwt(jwt);
		
		postService.deletePostById(postId, user.getId());
		
		ApiResponse res = new ApiResponse();
		res.setMessage("Post deleted Successfully");
		res.setStatus(true);
		
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
	
	@GetMapping("/user/{userId}/likes") 
	public ResponseEntity<List<PostDto>> findPostByLikesContainesUser(@PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws UserException, PostException{
		
		User user = userService.findUserProfileByJwt(jwt);
		List<Post> posts = postService.findByLikesContainsUser(user);
		List<PostDto> postDtos = PostDtoMapper.toPostDto(posts, user);
		
		return new ResponseEntity<>(postDtos, HttpStatus.OK);
	}
	
}
