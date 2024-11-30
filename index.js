const fs = require("fs");

// CREATE: employees.json dosyasını oluştur ve veri yaz
fs.writeFile(
  "employees.json",
  JSON.stringify({ name: "Employee 1 Name", salary: 2000 }, null, 2),
  (err) => {
    if (err) {
      console.error("Dosya oluşturulurken hata oluştu:", err);
    } else {
      console.log("Dosya başarıyla oluşturuldu!");

      // READ: employees.json dosyasını oku
      fs.readFile("employees.json", "utf8", (err, data) => {
        if (err) {
          console.error("Dosya okunurken hata oluştu:", err);
        } else {
          console.log("Dosya içeriği:", data);

          // UPDATE: employees.json dosyasını güncelle
          const updatedData = JSON.stringify(
            { name: "Employee 1 Updated Name", salary: 3000 },
            null,
            2
          );
          fs.writeFile("employees.json", updatedData, (err) => {
            if (err) {
              console.error("Dosya güncellenirken hata oluştu:", err);
            } else {
              console.log("Dosya başarıyla güncellendi!");

              // DELETE: employees.json dosyasını sil
              fs.unlink("employees.json", (err) => {
                if (err) {
                  console.error("Dosya silinirken hata oluştu:", err);
                } else {
                  console.log("Dosya başarıyla silindi!");
                }
              });
            }
          });
        }
      });
    }
  }
);
//CRUD işlemlerini ayrı ayrı yapabiliriz ama işlemlerin asenkron olarak gerçekleştirildiğine dikkat edilmelidir!
