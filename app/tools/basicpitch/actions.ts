import * as tf from '@tensorflow/tfjs';
import load from 'audio-loader';
import fs from 'fs';
import { AudioBuffer, AudioContext } from 'web-audio-api';
import { BasicPitch } from '@spotify/basic-pitch/src/inference';
import {
  addPitchBendsToNoteEvents,
  NoteEventTime,
  noteFramesToTime,
  outputToNotesPoly,
} from '@spotify/basic-pitch/toMidi';
import { toAllBeClose } from '@spotify/basic-pitch/src/matchers';
import { Midi } from '@tonejs/midi';
require('@tensorflow/tfjs-node');


export const runBasicPitch = ( filePath: string ): NoteEventTime[]  => {

    const audioCtx = new AudioContext();
    let audioBuffer = undefined;

    audioCtx.decodeAudioData(
        fs.readFileSync(/* Path to audio file */),
        async (_audioBuffer: AudioBuffer) => {
            audioBuffer = _audioBuffer;
        },
        () => {},
    );

    while (audioBuffer === undefined) {
        await new Promise(r => setTimeout(r, 1));
    }

    const basicPitch = new BasicPitch(model);
    await basicPitch.evaluateModel(
        audioBuffer as unknown as AudioBuffer,
        (f: number[][], o: number[][], c: number[][]) => {
            frames.push(...f);
            onsets.push(...o);
            contours.push(...c);
        },
        (p: number) => {
            pct = p;
        },
    );

    const notes = noteFramesToTime(
        addPitchBendsToNoteEvents(
            contours,
            outputToNotesPoly(frames, onsets, 0.25, 0.25, 5),
        ),
    );

    return notes;
    
}
