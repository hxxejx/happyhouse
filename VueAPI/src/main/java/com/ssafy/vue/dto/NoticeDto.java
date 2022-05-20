package com.ssafy.vue.dto;

import java.util.List;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "NoticeDto (공지사항정보)", description = "글번호, 제목, 내용, 작성자아이디, 작성일을 가진   Domain Class")
public class NoticeDto {
	@ApiModelProperty(value = "글번호")
	private int articleno;
	@ApiModelProperty(value = "작성자아이디")
	private String userid;
//	@ApiModelProperty(value = "작성자이름")
//	private String username;
	@ApiModelProperty(value = "제목")
	private String subject;
	@ApiModelProperty(value = "내용")
	private String content;
	@ApiModelProperty(value = "조회수")
	private int hit;
	@ApiModelProperty(value = "작성일")
	private String regtime;
//	@ApiModelProperty(value = "파일")
//	private List<FileInfoDto> fileinfos;

	public int getArticleno() {
		return articleno;
	}

	public void setArticleno(int articleno) {
		this.articleno = articleno;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	public String getRegtime() {
		return regtime;
	}

	public void setRegtime(String regtime) {
		this.regtime = regtime;
	}

//	public List<FileInfoDto> getFileinfos() {
//		return fileinfos;
//	}
//
//	public void setFileinfos(List<FileInfoDto> fileinfos) {
//		this.fileinfos = fileinfos;
//	}

}
