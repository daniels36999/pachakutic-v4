import {
  BookOpen, Briefcase, Camera, CircleHelp, ClipboardCheck, Compass, Droplets, Facebook, Flag,
  Footprints, Globe, GraduationCap, Instagram, Landmark, Leaf, Mail, Map as MapIcon, MapPin,
  Monitor, Phone, Recycle, Route, Ruler, Scale, School, ShieldAlert, ShieldCheck, Sprout, Store,
  Train, TrendingUp, Users, Waves, Youtube, UserRound, Building2, Mountain,
} from 'lucide-react';

// Registro de iconos Lucide por nombre. Los datos (src/data) usan estos nombres.
// Para usar un icono nuevo: impórtalo arriba y agrégalo a este objeto.
const icons = {
  BookOpen, Briefcase, Camera, ClipboardCheck, Compass, Droplets, Facebook, Flag, Footprints,
  Globe, GraduationCap, Instagram, Landmark, Leaf, Mail, Map: MapIcon, MapPin, Monitor, Phone,
  Recycle, Route, Ruler, Scale, School, ShieldAlert, ShieldCheck, Sprout, Store, Train,
  TrendingUp, Users, Waves, Youtube, UserRound, Building2, Mountain,
};

export default function Icon({ name, size = 22, strokeWidth = 1.75, ...rest }) {
  const Cmp = icons[name] || CircleHelp;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" {...rest} />;
}
