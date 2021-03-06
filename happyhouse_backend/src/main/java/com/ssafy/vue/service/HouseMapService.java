package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.HouseDealDto;
import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;

public interface HouseMapService {

	List<SidoGugunCodeDto> getSido() throws Exception;
	List<SidoGugunCodeDto> getGugunInSido(String sido) throws Exception;
	List<HouseInfoDto> getDongInGugun(String gugun) throws Exception;
	List<HouseInfoDto> getAptInDong(String dong) throws Exception;
	boolean countUpHouse(long aptcode) throws Exception;
	List<HouseInfoDto> popularHouse() throws Exception;
	List<HouseDealDto> getAptDeal(long aptCode);
	List<HouseInfoDto> getNewDeal() throws Exception;
	HouseInfoDto getAptDetail(long aptCode);
	
}
