package com.simple.basic.chat;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Component // service, repository처럼 bean으로 등록이 됩니다.
public class SocketHandler extends TextWebSocketHandler {
    //기본적으로 4가지를 상속받습니다.
    //웹소켓 설정 추가 (config)

    //소켓 연결된 사람들을 저장하는 1개의 채팅방
    //다중채팅방을 구현하고 싶다면, 다른객체에서 채팅방 관리할 수 있는 자료구조를 만드세요~
    private Map<WebSocketSession, String> map = new HashMap<>();

    //handshake이후에 연결이 성립되면 실행
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        String userId = "해피한제이지";

        //26.> vs 
        URI uri = session.getUri(); //URI얻음
        if (uri != null) {
            String query = uri.getQuery(); //쿼리스트링 얻음 userId=홍길동&room=1

            String param = query.split("&")[0]; //userId=홍길동
            String room = query.split("&")[1]; //room=1

            if (param.contains("userId=")) {
                userId = param.split("userId=")[1]; //유저아이디를 얻음
            }
            if (room.contains("room=")) {
                //System.out.println("여러분이 나중에 룸번호로 자알~ 써보세요~" + room);
            }

        }

        //System.out.println("요청URI" + uri);
        System.out.println("접속 세션아이디:" + session.getId());
        System.out.println("유저명:" + userId);

        map.put(session, userId);

        //입장 메시지
        broadcastMessage("\"" + userId + "님이 입장했습니다");

    }

    //현재 연결되어 있는 socket에 메시지를 전송
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        System.out.println("메시지 전송...");
        System.out.println(message.getPayload()); //입력 메시지 출력하기

        System.out.println("메시지 세션~~~~~~" + session);
        //29. 모든사람에게 > vs 러
        System.out.println("현재 접속자! : " + map.size());
        broadcastMessage(map.get(session) + " : " + message.getPayload()); //메시지 전송~
    }

    //연결이 끊기면 실행
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        
        //퇴장 메시지, remove 위에따
        System.out.println(map.get(session) + "가 나갔어요");

        map.remove(session); //세션삭제
        System.out.println("연결해제: " + session.getId());


    }

    //혹시 소켓에서 에러가 발생되면 실행
    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        System.out.println("소켓에러~~~");
    }

    //28. 메시지 보내기 기능
    public void broadcastMessage(String msg) throws Exception { //msg 받아서
        //map 안에 있는 모든 사용자에게 braodcast 해야한다
        Set<Map.Entry<WebSocketSession, String>> set123 = map.entrySet();

        for (Map.Entry<WebSocketSession, String> entry : set123) { //반복넣기
            WebSocketSession session = entry.getKey();
            if (session.isOpen()) { // 닫혀있지 않으면
                session.sendMessage(new TextMessage(msg)); // 메시지 전송 > 소켓으로

            }
        }

    }


}