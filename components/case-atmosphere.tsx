'use client';
import {useState} from 'react';
import {Pause,Play} from 'lucide-react';

export default function CaseAtmosphere(){
 const [paused,setPaused]=useState(false);
 return <><div className="case-atmosphere" data-paused={paused} aria-hidden="true"/><button className="motion-control case-motion-control" type="button" aria-label={paused?'Resume background animation':'Pause background animation'} title={paused?'Resume background animation':'Pause background animation'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={14} aria-hidden="true"/>:<Pause size={14} aria-hidden="true"/>}<span>{paused?'Resume background':'Pause background'}</span></button></>;
}
