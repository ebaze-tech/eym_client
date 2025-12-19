import React from 'react';
import { Music, ScrollText } from 'lucide-react';

export default function CulturalHeritage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cultural Heritage</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Anthem */}
          <div className="bg-blue-50 rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Eruwa Anthem</h3>
              </div>
              
              <div className="space-y-6 text-gray-700 font-medium leading-relaxed text-lg italic">
                <p>Ilu Eruwa Ojoko</p>
                <p>N ko ni gbagbe Re</p>
                <p>N O gbe o leke okan mi</p>
                <p>Ni ile Yoruba</p>
                <p>Emi o fi Eruwa sogo</p>
                <p>Emi o sogo yi l&apos;okan mi</p>
                <p>Maa yo loruko Okele</p>
                <p>Emi Omo Agbe Dudu</p>
                <p>Emi Ayo (2×) Mayo lori Obaseeku</p>
                <p>Emi Ayo (2×) Mayo lori Okele</p>
                <br />
                <p>Eruwa &apos;lu Alafia</p>
                <p>Iwo wa lokan Mi</p>
                <p>Emi o ma saferi Re,</p>
                <p>Nibi ti mo ba wa,</p>
                <p>Emi o fi Eruwa yangan</p>
                <p>Lonakona n o feran Re</p>
                <p>Ma yo loruko Ofere</p>
                <p>Emi Omo Agbe Dudu</p>
                <p>Emi Ayo (2×) Mayo lori Apanpa</p>
                <p>Emi Ayo (2×) Mayo lori Akolu</p>
              </div>
            </div>
          </div>

          {/* Oriki */}
          <div className="bg-gray-50 rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full -ml-32 -mb-32 opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white">
                  <ScrollText className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Oriki Eruwa</h3>
              </div>
              
              <div className="space-y-2 text-gray-700 font-medium leading-relaxed text-lg">
                <p>Eruwa Ojoko</p>
                <p>Agbe dudu ori Okele</p>
                <p>Akuko gagara kiiko l&apos;Eruwa,</p>
                <p>Agbe ni daja won</p>
                <p>Agbe ni daja Olokun</p>
                <p>Aluko a si da t&apos; olosa</p>
                <p>Lekeleke gbarada</p>
                <p>Oun nii da daja aso funfun</p>
                <p>Omo agbe n rele Ikosun</p>
                <p>Lekeleke gbarada</p>
                <p>O n rele lo o kefun</p>
                <p>Omo - o-ganganyin</p>
                <p>Omo oke adoro ko gbe mi</p>
                <p>N o rokele ile</p>
                <p>Omo wee-wee</p>
                <p>Omo onigba poro</p>
                <p>Omo aduro bo</p>
                <p>Omo abere bo</p>
                <p>Omo abo-fohun</p>
                <p>Omo Obaseeku</p>
                <p>Ododo baba ewu</p>
                <p>Akere foba sura</p>
                <p>Omo oni gbodogi</p>
                <p>To sire nita iya e biri-biri</p>
                <p>Eruwa Ojoko</p>
                <p>Agbe dudu ori kele.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
