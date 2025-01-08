function server(){
    ~/Downloads/dashboard/redbean.com
}

function browser(){
    sleep 5
    open -a Safari http://127.0.0.1:8080/src/index.html
}

server 1 &
browser 2 &

wait
