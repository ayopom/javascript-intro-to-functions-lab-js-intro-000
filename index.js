function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var str = string, str1 = string;

  if(string === str.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string === str1.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (string === "I lov you, Grandma.") {
    return "I love you, too.";
  }
  
}

