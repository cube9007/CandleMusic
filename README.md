## npm install

첫 실행시 npm 실행이 안되면
구글에 node.js 검색 후 홈페이지 들어가서 lts버전 설치해주세요.
그래도 안되면 오류 문구를 챗지피티에게 복붙해서 물어봐주세요.

## npm run dev

1. 깃허브
git CMD 설치
https://github.com/cube9007/CandleMusic.git
주소에서 코드(https) 복사하기
git CMD 프로그램에서
cd desktop
git clone https://github.com/cube9007/CandleMusic.git

바탕화면에 폴더 깔려있음
vscode로 해당 폴더 열기

터미널에서 npm install
(npm 이 안될때 node js 설치해주기)
	npm  = node package manager
	node = js는 웹 언어인데 앱 언어로 변환
	(= 웹 언어를 프로그래밍 언어처럼 쓰게 만드는 얘)

npm run dev 로 사이트 확인

npm run build : 사이트 압축

npm run dist : 커밋(commit), 임시 저장소 
npm run deploy : 푸시(push), 실전 저장소
-> github pages 에 올라감

git add .
git commit -m 'message'
git push
-> main 에 올라감