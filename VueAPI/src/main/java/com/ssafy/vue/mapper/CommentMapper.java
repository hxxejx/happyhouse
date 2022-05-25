package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.CommentDto;

@Mapper
public interface CommentMapper {

	List<CommentDto> list(int check, int articleno);

	int create(CommentDto commentDto);

	int modify(CommentDto commentDto);

	int delete(int commentNo);

	CommentDto getComment(int commentno);

	void cntUp(CommentDto commentDto);

	void cntDown(int commentNo);

}
