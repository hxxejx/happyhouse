package com.ssafy.vue.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.FileInfoDto;
import com.ssafy.vue.dto.NoticeDto;

@Mapper
public interface NoticeMapper {

	boolean registerArticle(NoticeDto notice);

	void registerFile(NoticeDto notice);

	List<NoticeDto> listArticle(/* Map<String, Object> map */);

	int getTotalCount(Map<String, String> map);

	NoticeDto getArticle(int articleNo);

	boolean updateArticle(NoticeDto notice);

	void deleteFile(int articleNo);

	void deleteArticle(int articleNo);

	List<FileInfoDto> fileInfoList(int articleNo);

	List<NoticeDto> search(int articleNo);

	NoticeDto selectNoticeByNo(int articleno);

	int countUpNotice(int articleno);

	int deleteNotice(int articleno);

	List<NoticeDto> searchNoticeByNo(int articleno);

	List<NoticeDto> searchNoticeBySubject(String subject);

}
