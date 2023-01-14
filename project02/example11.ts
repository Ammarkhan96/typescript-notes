type ImranInPakistan = {name: string; age: number; type: "Pakistan"};
type ImranOverseas =  {name: string; age: number; type: "Overseas", nickName: string};

type Imran = ImranInPakistan | ImranOverseas;

const imrann: Imran = Math.random() > 0.5 ?  {name: "Imran", age: 30, type: "Pakistan"} 
: {
    name: "Imran",
    age: 18,
    type: "Overseas",
    nickName: "Alexandar"
}

if (imrann.type === "Pakistan") {
    console.log("He's in Pakistan so we'll call him Imran");
    
} else {
    console.log(`He's not in Pakistan so we'll call him ${imrann.nickName}`);
    
}
