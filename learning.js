class Node {
    constructor(data,next = null){
        this.data=data;
        this.next=next;
    } 
}
class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertFirst(data){
        this.head= new Node(data,this.head);
        this.size++;
    }
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head=node;
        }
        else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(data,index){
        if(index < 0 && index > this.size){
            return;
        }
        if(index === 0)
        {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        }      
        else{
            var prev,current;
            //set current to first
            current = this.head;
            let count = 0;
            while(count < index){
                prev = current; // node before index
                count++;
                current = current.next; // node after index
            }
            node.next = current; 
            prev.next = node;
        }  
        this.size++;
    }
    printList(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}


var songs = [
    {
        "id":1,
        "song_name": "Nghe như tình yêu",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/nghenhutinhyeu.mp3"
    },
    {
        "id":2,
        "song_name": "Không chỉ là thoáng qua",
        "artist_name": "wAvy x Vũ Thảo My",
        "song_src":"./music/khongchilathoangqua.mp4"
    },
    {
        "id":3,
        "song_name": "Giờ thì ai cười",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/giothiaicuoi.mp3"
    },
    {
        "id":4,
        "song_name": "Vệ tinh",
        "artist_name": "HIEUTHUHAI, Hoàng Tôn, Kewtiie",
        "song_src":"./music/vetinh.mp3"
    },
    {
        "id":5,
        "song_name": "Bật Nhạc Lên",
        "artist_name": "HIEUTHUHAI, Harmonie",
        "song_src":"./music/batnhaclen.mp3"
    },
    {
        "id":6,
        "song_name": "Cua",
        "artist_name": "HIEUTHUHAI, Manbo",
        "song_src":"./music/cua.mp3"
    },
    {
        "id":7,
        "song_name": "Một công đôi việc",
        "artist_name": "HURRYKNG, HIEUTHUHAI",
        "song_src":"./music/motcongdoiviec.mp3"
    },
    {
        "id":8,
        "song_name": "Không thể say",
        "artist_name": "HIEUTHUHAI",
        "song_src":"./music/khongthesay.mp3"
    }
]
songs.sort((s1,s2)=>{
    var strA = s1.song_name.toLowerCase();
    var strB = s2.song_name.toLowerCase();

    if(strA < strB)
    {
        return -1;
    }
    if(strA > strB)
    {
        return 1;
    }
    return 0;
})

console.table(songs)
