package com.ssafy.vue.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "CommentDto : Q&A 게시판에 작성하는 게시글에 대한 댓글정보")
public class CommentDto {

	@ApiModelProperty(value = "댓글번호")
	private int commentno;
	@ApiModelProperty(value = "작성자아이디")
	private String userid;
	@ApiModelProperty(value = "댓글")
	private String comment;
	@ApiModelProperty(value = "작성시각")
	private String regtime;
	@ApiModelProperty(value = "게시글번호")
	private int articleno;
	@ApiModelProperty(value = "게시판 확인")
	private int check;

	public int getCommentno() {
		return commentno;
	}

	public void setCommentno(int commentno) {
		this.commentno = commentno;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getRegtime() {
		return regtime;
	}

	public void setRegtime(String regtime) {
		this.regtime = regtime;
	}

	public int getArticleno() {
		return articleno;
	}

	public void setArticleno(int articleno) {
		this.articleno = articleno;
	}

	public int getCheck() {
		return check;
	}

	public void setCheck(int check) {
		this.check = check;
	}

	@Override
	public String toString() {
		return "CommentDto [commentno=" + commentno + ", userid=" + userid + ", comment=" + comment + ", regtime="
				+ regtime + ", articleno=" + articleno + ", check=" + check + "]";
	}

}
