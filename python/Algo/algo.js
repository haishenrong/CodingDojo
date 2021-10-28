server {
    listen 80;
    server_name 18.190.154.83;
    location / {
        include proxy_params;
        proxy_pass http://unix:/home/ubuntu/flask_belt_exam/flask_belt_exam.sock;
    }
}