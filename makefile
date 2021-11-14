APP_NAME=yoopii-rails
DB_SERVER_NAME=yoopii


#build:
#	docker build  --no-cache -t ${APP_NAME} .
#init:
#	docker run -v $(CURDIR):/app ${APP_NAME} rails new --webpack=react .
#install:
#	docker run -v $(CURDIR):/app -v $(CURDIR)/bundle:/usr/local/bundle  ${APP_NAME} bundle install
start:
#	docker rm --force ${DB_SERVER_NAME} || true
	docker run -p 5491:5432 --name ${DB_SERVER_NAME} -e POSTGRES_USER=${USER} -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres
#	docker rm --force ${APP_NAME} || true
#	docker run -p 3000:3000 -p 3035:3035 -v $(CURDIR):/app -v $(CURDIR)/bundle:/usr/local/bundle --name ${APP_NAME} ${APP_NAME} rails server -b 0.0.0.0
