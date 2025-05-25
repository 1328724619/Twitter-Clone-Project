package com.Tian.request;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PostReplyRequest {

	public String content;
	private Long postId;
	private LocalDateTime createdAt;
	private String image;
}
