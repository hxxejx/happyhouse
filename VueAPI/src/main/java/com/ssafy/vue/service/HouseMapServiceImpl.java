package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.HouseDealDto;
import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;
import com.ssafy.vue.mapper.HouseMapMapper;

@Service
public class HouseMapServiceImpl implements HouseMapService {

	@Autowired
	private HouseMapMapper houseMapMapper;

	@Override
	public List<SidoGugunCodeDto> getSido() throws Exception {
		return houseMapMapper.getSido();
	}

	@Override
	public List<SidoGugunCodeDto> getGugunInSido(String sido) throws Exception {
		return houseMapMapper.getGugunInSido(sido);
	}

	@Override
	public List<HouseInfoDto> getDongInGugun(String gugun) throws Exception {
		return houseMapMapper.getDongInGugun(gugun);
	}

	@Override
	public List<HouseInfoDto> getAptInDong(String dong) throws Exception {
		return houseMapMapper.getAptInDong(dong);
	}

	@Override
	public boolean countUpHouse(long aptcode) throws Exception {
		return houseMapMapper.countUpHouse(aptcode) == 1;
	}

	@Override
	public List<HouseInfoDto> popularHouse() throws Exception {
		return houseMapMapper.popularHouse();
	}

	@Override
	public List<HouseDealDto> getAptDeal(long aptCode) {
		return houseMapMapper.getAptDeal(aptCode);
	}
	
	@Override
	public List<HouseInfoDto> getNewDeal() throws Exception {
		return houseMapMapper.getNewDeal();
	}

	@Override
	public HouseInfoDto getAptDetail(long aptCode) {
		return houseMapMapper.getAptDetail(aptCode);
	}

}
