package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.CommentDto;

public interface CommentService {

	List<CommentDto> list(int check, int articleno);

	boolean create(CommentDto commentDto);

	boolean modify(CommentDto commentDto);

	boolean delete(int commentNo);

	CommentDto getComment(int commentno);

}
