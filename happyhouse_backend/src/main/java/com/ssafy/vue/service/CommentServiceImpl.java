package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.CommentDto;
import com.ssafy.vue.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;

	@Override
	public List<CommentDto> list(int check, int articleno) {
		return commentMapper.list(check, articleno);
	}

	@Override
	public boolean create(CommentDto commentDto) {
		commentMapper.cntUp(commentDto);
		return commentMapper.create(commentDto) == 1;
	}

	@Override
	public boolean modify(CommentDto commentDto) {
		return commentMapper.modify(commentDto) == 1;
	}

	@Override
	public boolean delete(int commentNo) {
		commentMapper.cntDown(commentNo);
		return commentMapper.delete(commentNo) == 1;
	}

	@Override
	public CommentDto getComment(int commentno) {
		return commentMapper.getComment(commentno);
	}

}
