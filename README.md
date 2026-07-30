# Control Taxi — Manual de uso

App para gestionar turnos, gastos, servicios y cierres de uno o varios choferes de taxi, directamente desde el móvil, sin conexión a internet una vez instalada.

---

## 1. Instalación

1. Abre el enlace de la app en Chrome (Android) o Safari (iPhone).
2. Toca el menú del navegador → **"Añadir a pantalla de inicio"** (o "Instalar app" si aparece).
3. A partir de ahí se abre como una app normal, con su propio icono, sin barra del navegador.
4. Los datos se guardan **solo en este dispositivo/navegador**. Si desinstalas la app, borras datos de navegación, o cambias de móvil, esos datos se pierden a menos que hayas hecho una copia de seguridad (ver punto 8).

---

## 2. Iniciar sesión

Al abrir la app, primero se inicia sesión con correo y contraseña (cuenta personal del propietario). Después aparece un **selector de chofer** (los dos nombres configurables en Ajustes) para elegir quién va a usar la app en ese momento.

---

## 3. Pestaña Cierre (turno diario)

Aquí se registra el cierre de cada jornada:

- **Fecha**, número de clientes, **facturado total**, kilómetros de inicio y fin.
- La app calcula automáticamente: km recorridos, €/km, reparto empresa/chofer (según el % elegido: 50/50, 65/35, 70/30 o 100%), efectivo, cobrado por tarjeta/transferencia, y **"Efectivo de empresa"** (el dinero que debe entregar el chofer).
- Botón **"⏱ Cerrar turno ahora"** para cerrar con la fecha y hora actuales, o se puede elegir otra fecha para cierres atrasados.
- Al cerrar el turno, los servicios y gastos anotados ese día quedan archivados dentro del propio cierre.
- **Historial**: debajo del formulario se ve la lista de días ya cerrados de ese chofer. Tocando uno se abre para editarlo o eliminarlo.
- **Aviso de €/km bajo**: si al guardar el €/km sale por debajo de 0,55 €/km, la app pregunta si estás seguro antes de guardar (por si hay un error de km o de importe).
- **Historial de cambios**: si editas un cierre ya existente, queda anotado dentro de ese cierre quién lo editó y cuándo (y si se hizo con el PIN maestro).

🔒 *Esta pestaña pide el PIN individual de cada chofer (ver punto 7). Cada uno solo ve y edita sus propios cierres.*

---

## 4. Pestaña Servicios

Registro de cada carrera/servicio realizado:

- Fecha, **hora**, nº de taxi, cliente (opcional), origen, destino.
- Importe, descuento (%), forma de pago (efectivo / tarjeta / TPV / transferencia).
- Si es con tarjeta o transferencia, se puede añadir el importe de autopista incluido en el cobro, y una propina/redondeo (que va 100% para el chofer).
- Estado: Pagado / Pendiente / Anulado.
- Los servicios anotados aquí "en vivo" se van archivando automáticamente dentro del cierre del día cuando se cierra el turno.

---

## 5. Pestaña Gastos

Dos tipos de gastos:

- **Diarios**: gasolina, gastos con tarjeta, autopista (efectivo o tarjeta), otros gastos — ligados a un día y chofer concretos, se archivan también al cerrar el turno.
- **Fijos/periódicos**: gastos recurrentes del negocio (seguro, alquiler del taxi, etc.), no ligados a un turno concreto.

---

## 6. Mantenimiento

Registro de revisiones y recordatorios (cambio de aceite, neumáticos, ITV, frenos, filtros, batería, revisión general, otros), con avisos por kilómetros o por fecha.

---

## 7. Cierre Mensual y Cierre Anual

Resumen combinado de **ambos choferes juntos** (un único cierre por mes/año, no uno por chofer):

- Facturado, efectivo, cobrado por tarjeta, efectivo de empresa, reparto empresa/chofer, desglose de gastos, km recorridos y días trabajados (contados por fecha real, no por número de turnos).
- Tarjetas de colores destacando los datos clave, tanto en pantalla como en el PDF.
- Botones para **descargar PDF** o **compartir** directamente (WhatsApp, etc.), con nombre de archivo automático.

🔒 *Estas dos pestañas piden el **PIN maestro** — pensadas solo para el propietario, ya que combinan los datos de los dos choferes.*

---

## 8. Ajustes

- **Nombres de los choferes**: cambia los nombres que aparecen en toda la app.
- **PIN maestro de Ajustes**: protege Ajustes, Cierre mensual y Cierre anual. Sin este PIN configurado, esas pestañas quedan libres.
- **PIN de acceso a Turno y Cierres**: PIN individual por chofer para entrar a la pestaña Cierre. Si se deja vacío, ese chofer entra sin PIN.
- **Bloqueo de edición de cierres**: si se activa (requiere tener PIN maestro puesto), los choferes pueden *ver* sus cierres con su propio PIN, pero para *editarlos o eliminarlos* también se les pedirá el PIN maestro.
- **Copia de seguridad**: exportar todos los datos a un archivo, e importarlo de vuelta (útil al cambiar de móvil).
- **Borrar todo**: elimina cierres, gastos, servicios y mantenimientos de este navegador (con doble confirmación). No afecta a los PIN ni a los nombres configurados.

### Bloqueo automático por inactividad
Si pasan 15 minutos sin tocar la pantalla, los desbloqueos de PIN (de chofer y maestro) se cierran solos, y habrá que volver a introducirlos para entrar a las pestañas protegidas.

⚠️ **No hay recuperación automática de PIN.** Si se olvida un PIN de chofer, se puede cambiar entrando a Ajustes con el PIN maestro. Si se olvida el PIN maestro, habría que restaurar desde una copia de seguridad hecha antes de configurarlo, o modificar el archivo de la app directamente.

---

## 9. Copias de seguridad — buenas prácticas

- Haz una copia de seguridad desde Ajustes de vez en cuando, sobre todo antes de cambiar de móvil o de borrar datos del navegador.
- Los archivos `index.html` antiguos (versiones de código ya reemplazadas) se pueden borrar sin problema — no contienen datos, solo el código de la app.
- `manifest.json` y `service-worker.js` deben mantenerse siempre en el repositorio, en su versión más reciente.

---

*Este documento resume el funcionamiento de la app en la versión actual. Si se añaden nuevas funciones más adelante, conviene actualizarlo.*
