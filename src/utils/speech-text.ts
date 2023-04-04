const speechText = (textValue: string) => {
    const synth = speechSynthesis;
    const voices = synth.getVoices();
    const portugueseVoice = voices.find((voice) => voice.lang === 'pt-BR');

    const utterance = new SpeechSynthesisUtterance(textValue);
    utterance.lang = 'pt-BR';
    utterance.voice = portugueseVoice as SpeechSynthesisVoice;

    const speak = () => synth.speak(utterance);

    const resume = () => synth.resume();

    const pause = () => synth.pause();

    const cancel = () => synth.cancel();

    return {
        synth,
        utterance,
        speak,
        resume,
        pause,
        cancel,
    };
};

export { speechText };
