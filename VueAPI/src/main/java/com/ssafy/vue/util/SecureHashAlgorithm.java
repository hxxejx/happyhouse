//package com.ssafy.vue.util;
//
//import java.security.MessageDigest;
//import java.security.SecureRandom;
// 
//public class SecureHashAlgorithm {
//	private static final int SALT_SIZE = 16;
//	
//	public static String Hashing(String string, String Salt) throws Exception {
//		
//		MessageDigest md = MessageDigest.getInstance("SHA-256");
//
//		for(int i = 0; i < 10000; i++) {
//			String temp = string + Salt;
//			md.update(temp.getBytes("UTF-8"));
//			string = Byte_to_String(md.digest());
//		}
//		
//		return string;
//	}
//	
//	public static String getSALT() throws Exception {
//		SecureRandom rnd = new SecureRandom();
//		byte[] temp = new byte[SALT_SIZE];
//		rnd.nextBytes(temp);
//		return Byte_to_String(temp);
//		
//	}
//	
//	private static String Byte_to_String(byte[] temp) {
//		StringBuilder sb = new StringBuilder();
//		for(byte a : temp) {
//			sb.append(String.format("%02x", a));
//		}
//		return sb.toString();
//	}
//}