aws --profile wagerbet ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 590328391605.dkr.ecr.ap-south-1.amazonaws.com
if [[ "$OSTYPE" =~ ^darwin ]]
then
  docker build --no-cache --platform linux/amd64 -t wagerbet-frontend .
elif [[ "$OSTYPE" =~ ^linux ]]
then
  docker build --no-cache -t wagerbet-frontend .
fi
docker tag wagerbet-frontend:latest 590328391605.dkr.ecr.ap-south-1.amazonaws.com/platform-frontend:v0.3.7
docker push 590328391605.dkr.ecr.ap-south-1.amazonaws.com/platform-frontend:v0.3.7