import { useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from 'react-icons/bs';
import Button from './components/Button';

import { speechText } from './utils/speech-text';

function App() {
    const [textValue, setTextValue] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const { synth, utterance, speak, pause, resume, cancel } = speechText(textValue);

    const play = () => {
        if (!textValue) {
            return;
        }

        if (synth.speaking) {
            pause();
            setIsPlaying(false);
        }

        if (synth.paused) {
            resume();
            setIsPlaying(true);
        }

        if (!synth.speaking) {
            speak();
            setIsPlaying(true);
        }

        utterance.addEventListener('end', () => {
            setIsPlaying(false);
        });
    };

    const stop = () => {
        if (synth.speaking) {
            cancel();
            setIsPlaying(false);
        }
    };

    return (
        <div className="App">
            <main className="flex flex-col items-center justify-center w-full h-full px-6 py-4 bg-gradient-to-r from-primary-700 to-primary-900">
                <section className="flex flex-col w-full items-center h-[80%] justify-between ">
                    <div className="w-full max-w-lg text-center">
                        <h1 className="text-3xl font-bold text-primary-50">Read To Me</h1>
                        <p className="font-semibold text-primary-100">
                            {!isPlaying ? 'Informe o texto que deseja ser lido.' : 'Lendo texto, aguarde até o fim...'}
                        </p>

                        <textarea
                            className="w-full p-3 mt-5 overflow-x-hidden overflow-y-auto font-semibold text-center bg-transparent border appearance-none resize-none from-primary-900 to-primary-999/60 bg-gradient-to-b backdrop-blur-xl h-60 border-primary-500 rounded-xl text-primary-50"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between w-full max-w-lg p-4 overflow-hidden border bg-primary-900/90 backdrop-blur-xl rounded-xl border-primary-600">
                        <Button
                            type="button"
                            onClick={play}
                            aria-label="Play/Pause"
                            icon={!isPlaying ? <BsFillPlayFill size={28} /> : <BsFillPauseFill size={28} />}
                        />

                        <Button icon={<BsFillStopFill size={28} />} aria-label="stop" onClick={stop} />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
