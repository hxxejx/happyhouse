package com.ssafy.vue.service;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.vue.dto.FileInfoDto;
import com.ssafy.vue.dto.NoticeDto;
import com.ssafy.vue.mapper.NoticeMapper;
import com.ssafy.vue.util.PageNavigation;

@Service
public class NoticeServiceImpl implements NoticeService {

	@Autowired
	private NoticeMapper noticeMapper;

	@Override
	@Transactional
	public boolean registerArticle(NoticeDto notice) {
		return noticeMapper.registerArticle(notice);
//		noticeMapper.registerArticle(guestBookDto);
//		List<FileInfoDto> fileInfos = guestBookDto.getFileInfos();
//		if (fileInfos != null && !fileInfos.isEmpty()) {
//			noticeMapper.registerFile(guestBookDto);
//		}
	}

	@Override
	public List<NoticeDto> listArticle(/* Map<String, String> map */) {
//		Map<String, Object> param = new HashMap<String, Object>();
//		String key = map.get("key");
//		if ("userid".equals(key))
//			key = "g.userid";
//		param.put("key", key == null ? "" : key);
//		param.put("word", map.get("word") == null ? "" : map.get("word"));
//		int currentPage = Integer.parseInt(map.get("pg") == null ? "1" : map.get("pg"));
//		int sizePerPage = Integer.parseInt(map.get("spp"));
//		int start = (currentPage - 1) * sizePerPage;
//		param.put("start", start);
//		param.put("spp", sizePerPage);
//		return noticeMapper.listArticle(param);
		return noticeMapper.listArticle();
	}

	@Override
	public PageNavigation makePageNavigation(Map<String, String> map) {
		PageNavigation pageNavigation = new PageNavigation();

		int naviSize = 10;
		int currentPage = Integer.parseInt(map.get("pg"));
		int sizePerPage = Integer.parseInt(map.get("spp"));

		pageNavigation.setCurrentPage(currentPage);
		pageNavigation.setNaviSize(naviSize);
		int totalCount = noticeMapper.getTotalCount(map);
		pageNavigation.setTotalCount(totalCount);
		int totalPageCount = (totalCount - 1) / sizePerPage + 1;
		pageNavigation.setTotalPageCount(totalPageCount);
		boolean startRange = currentPage <= naviSize;
		pageNavigation.setStartRange(startRange);
		boolean endRange = (totalPageCount - 1) / naviSize * naviSize < currentPage;
		pageNavigation.setEndRange(endRange);
		pageNavigation.makeNavigator();

		return pageNavigation;
	}

	@Override
	public NoticeDto getArticle(int articleNo) {
		return noticeMapper.getArticle(articleNo);
	}

	@Override
	@Transactional
	public boolean updateArticle(NoticeDto notice) {
		return noticeMapper.updateArticle(notice);
	}

	@Override
	@Transactional
	public void deleteArticle(int articleNo, String path) {
		List<FileInfoDto> fileList = noticeMapper.fileInfoList(articleNo);
		noticeMapper.deleteFile(articleNo);
		noticeMapper.deleteArticle(articleNo);
		for (FileInfoDto fileInfoDto : fileList) {
			File file = new File(
					path + File.separator + fileInfoDto.getSaveFolder() + File.separator + fileInfoDto.getSaveFile());
			file.delete();
		}
	}

	@Override
	public List<NoticeDto> search(int articleNo) {
		return noticeMapper.search(articleNo);
	}

	@Override
	public NoticeDto detailNotice(int articleno) {
		return noticeMapper.selectNoticeByNo(articleno);
	}

	@Override
	public boolean countUpNotice(int articleno) {
		return noticeMapper.countUpNotice(articleno) == 1;
	}

	@Override
	@Transactional
	public boolean deleteNotice(int articleno) {
		return noticeMapper.deleteNotice(articleno) == 1;
	}

	@Override
	public List<NoticeDto> searchNoticeByNo(int articleno) {
		return noticeMapper.searchNoticeByNo(articleno);
	}

	@Override
	public List<NoticeDto> searchNoticeBySubject(String subject) {
		return noticeMapper.searchNoticeBySubject(subject);
	}

}
