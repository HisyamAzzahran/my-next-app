export default function handler(req, res) {
    console.log('Received request:', req.method, req.body);
    
    if (req.method === 'POST') {
      const { name } = req.body;
  
      const khodamNames = [
        'Macan pemarah', 'Buaya sunda', 'Beruang sunda', 'Harimau birahi', 
        'Tutup odol', 'Tutup panci', 'Kaleng kejepit', 'Kanebo kering', 
        'Kapal karam', 'Gergaji mesin', 'Nyi blorong', 'Jin rawa rontek', 
        'Kucing Israel', 'Capung gila', 'Tumis kangkung', 'Jam Dinding Rusak', 
        'Gunting Tumpul', 'Kasur Empuk', 'Payung Robek', 'Kulkas Kosong', 
        'Piring Pecah', 'Meja Berdecit', 'Koper Berat', 'Topi Melorot', 
        'Lem Super Lengket', 'Keripik Garing', 'Senter Mati', 'Kue Kering', 
        'Bantal Empuk', 'Kendi Air', 'Penggaris Melengkung', 'Tali Jemuran', 
        'Kancut badak', 'Rayap gendut', 'Pagar besi', 'Kunci gembok', 
        'LC karaoke', 'Cicak kawin', 'Cupang Betina', 'Sundel Bolong', 
        'Tuyul Kesandung', 'Genderuwo TikTok', 'Jin Susu Kental Manis', 
        'Si Lontong Lumer', 'Setan Payung Bocor', 'Jin Es Krim Leleh', 
        'Pocong Bersepeda', 'Kuntilanak Selfie', 'Tuyul Main PS5', 'Batu Bata', 
        'Remote TV', 'Kompor Meledak', 'Helm Nyasar', 'Gitar Putus Senar', 
        'Si Sate Klathak', 'Genderuwo Tertawa', 'Jin Penjual Cilok', 
        'Setan Jualan Online', 'Kuntilanak Kecanduan Kopi', 'Pocong Nyanyi Dangdut', 
        'Jin Martabak Telor', 'Tuyul Kerja Part-Time', 'Handuk Basah', 'Kipas Rusak', 
        'Jemuran Penuh', 'Tisu Gulung', 'Gelas Plastik', 'Si Bakso Urat', 
        'Setan Suka Drama Korea', 'Genderuwo Nonton Netflix', 'Jin Donat Kentang', 
        'Kuntilanak Pake Kacamata', 'Pocong Mainan Kucing', 'Jin Peminum Boba', 
        'Tuyul Bersepatu Roda', 'Si Keripik Pedas', 'Setan Kolektor Komik', 
        'Genderuwo Pemain Basket', 'Jin Sate Madura', 'Kuntilanak Nge-Gym', 
        'Pocong Ngantor', 'Tuyul Jago Coding', 'Si Pizza Keju', 'Setan Pemilik Cafe', 
        'Genderuwo Seniman', 'Jin Coklat Batangan', 'Kuntilanak Hobi Makeup', 
        'Pocong Main TikTok', 'Tuyul Kuliah Online', 'Si Rambutan Manis', 
        'Sendal Jepit', 'Panci Gosong', 'Guling Gembung', 'Sarung Bantal', 
        'Kaos Oblong', 'Jin Kipas Angin', 'Setan Pembeli Pulsa', 'Kuntilanak Karaoke', 
        'Pocong Joget', 'Ember Bocor', 'Celana Sobek', 'Sepeda Tua', 
        'Telepon Jadul', 'Tas Plastik', 'Kalender Bekas', 'Pensil Inul', 
        'Buku Kusut', 'Korek Macet', 'Mangkok Retak', 'Lemari Penuh'
      ];
  
      const randomIndex = Math.floor(Math.random() * khodamNames.length);
      const khodamResult = `${name}, khodam Anda adalah ${khodamNames[randomIndex]}`;
  
      res.status(200).json({ result: khodamResult });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  