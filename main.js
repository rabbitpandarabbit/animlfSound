
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classififer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zhBCYKVho/model.json', modelReady);
}
function modelReady() {
    classififer.classify(gotResults);
}