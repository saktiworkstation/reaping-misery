<template>
  <section id="story" class="section bg-gradient-to-b from-game-dark to-indigo-950">
    <div class="container">
      <h2 class="section-title text-center">Cerita</h2>
      <p class="section-subtitle text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum quam eu orci ultricies.
      </p>

      <div class="mt-12 max-w-4xl mx-auto">
        <div class="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-indigo-800">
          <h3 class="text-2xl font-bold text-white mb-4">Prolog</h3>
          <p class="text-indigo-200">
            Player bangkit dari kehampaan di bawah patung sang dewi, memulai petualangan dari ketiadaan, akankah dia berhasil mencapai level tertinggi dan mengalahkan semua musuh?.
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(chapter, index) in chapters" :key="index">
            <details class="bg-indigo-900/20 border border-indigo-800 rounded-xl overflow-hidden group">
              <summary
                class="p-4 cursor-pointer list-none flex justify-between items-center hover:bg-indigo-900/40 transition-colors">
                <h3 class="text-xl font-bold text-white">Chapter {{ index + 1 }}: {{ chapter.title }}</h3>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-indigo-400 group-open:rotate-180 transition-transform" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </summary>
              <div class="p-4 border-t border-indigo-800 bg-indigo-900/10">
                <p class="text-indigo-200">{{ chapter.description }}</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Chapter data
const chapters = [
  {
    title: 'Awal Petualangan',
    description: 'Suatu hari mc bertani seperti biasa, tetapi tiba" datang lah monster yg menyerang dan partner pun ikut membantu (menang), hal tersebut terjadi secara terus menerus dan frekuensi semakin sering, dan pada hari ke7(ato brp lh) sahabat mu juga memberitahu mc jika monster semakin meningkat serta memperkenalkan partner nya dgn mc. Teman mu memberitahu jika ada yg tdk beres di (dungeon 1) dan ingin mengajak mu memeriksa tmpt tersebut.Ternyata benar ada raja iblis dan penyelamat di(dungeon1) yg ada pada penghujung pertempuran dengan penyelamat yg hampir kalah.Pada saat itu berhubung ada mc dan sahabat nya, penyelamat memberi sisa kekuatan nya ke mereka berdua dan menyegel raja iblis dari sisa" kekuatan nya. Penyelamat berpesan untuk meningkatkan kekuatan agar saat segel raja iblis terlepas dapat menghentikan nya (segel tersebut akan terbuka pada tahunke4/level mc 30). akhir nya penyelamat mati serta raja iblis tersegel. Dalam waktu yg di ramalkan oleh penyelamat tersebut mc dan sahabat mu berlatih.'
  },
  {
    title: 'Musuh Pertama',
    description: 'Berlatih sambil bertani (dan berinteraksi dengan penduduk desa), seiring berjalanya waktu mc melihat sahabat berlatih (didekat dungeon 1 ato dimana lah) dan menyapa nya, tapi sahabat terlalu semangat sampai tidak mendengar sapaan mc. Di kemudian hari di ladang mengunjungi mc, sahabat mc tampak lebih kuat dan memamerkan hasil usaha nya dan sedikit sombong. Mc notice kalau ada yg aneh dengan aksesoris baru(entah itu amulet, cincin, atau yg di tanggalkan di sabuk) dan menanyakan tentang itu tp sahabat menolak menjelaskan dan langsung pergi( mc tampak curiga), lalu di kemudian hari mc melihat sahabt latihan lagi dan saat partner dr sahabt menyerang aksesoris ny bercahaya dgn aura gelap. Lalu mc kembali ke ladang dan mulai berspekulasi kalau acc(aksesoris) itu ada hubungan nya dgn raja iblis. Lalu beberapa hari kemudian terjadi badai (kalau mau ada gimik semua penduduk masih tidur) dan mc melihat sahabt mu menuju ke dungeon 1, mc mengikuti. Setelah sampai ternyata sahabt dipengaruhi raja iblis melalui acc tersebut dan mulai ritual untuk menghilangkan segel. Dari situ mc langsung bergegas untuk menggagalkan ritual dan tiba" datang bayangan raja iblis(lv setengah dr raja iblis yg di akhir game) dan mc terpaksa melawan nya. Setelah lama bertarung kekuatan bayangan raja iblis meningkat dan tiba" kekuatan penyelamat datang di dalam tubuh mc dan membantu mc memenagkan pertempuran tsb tp acc yg dibawa sahabt mulai terbang ke suatu wilayah dan muncul dungeon(kastil raja iblis). Kemudian mc melihat sahabt terbaring dan mc segera membawa ke klinik(rs). Lalu mc berniat menyerang ke kastil yg muncul itu...'
  },
  {
    title: 'Rahasia Terungkap',
    description: 'MC menjejaki lorong-lorong kelam kastil Raja Iblis yang kini berubah menjadi dungeon penuh monster korup dan ilusi membingungkan, setiap anak tangga menyuguhkan kilasan memori kelam Sang Penyelamat lewat bayangan hantu yang menghantui pandangannya—di lantai pertama, ia tergugah oleh visi kuno tentang Sang Penyelamat dan Raja Iblis yang dahulu bersinergi menahan ancaman kosmik bernama The Void; selanjutnya di lantai ketiga, ia dihadapkan pada paranoid-nya Sang Penyelamat yang menjurus pada pengkhianatan demi menahan ketakutan bahwa kekuatannya akan melampaui sang raja; dan ketika mencapai lantai kelima, ia menyaksikan ritual penyegelan brutal di mana Raja Iblis meraung, “Kau akan menghancurkan kita semua!”, membuat MC meragu akan warisan mulia Sang Penyelamat—terlebih saat kekuatan asing yang mengalir dalam nadinya tiba-tiba bereaksi aneh menghadapi setiap perangkap mematikan di dalam kastil.'
  }
]
</script>