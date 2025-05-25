package com.Tian.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Tian.model.Post;
import com.Tian.model.User;

public interface PostRepository extends JpaRepository<Post, Long>{

	List<Post> findAllByIsPostTrueOrderByCreatedAtDesc();
	
	List<Post> findByRepostUserContainsOrUser_IdAndIsPostTrueOrderByCreatedAtDesc(User user, Long userId);
	
	List<Post> findByLikesContainingOrderByCreatedAtDesc(User user);
	
	@Query("SELECT p from Post p JOIN p.likes l where l.user.id=:userId")
	List<Post> findByLikesUser_id(Long userId);
	
	
	
}
