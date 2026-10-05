# CLAUDE.md — vice-city-motors (showroommiami.com)

Este archivo lo lee Claude Code automáticamente al iniciar una sesión sobre
este repositorio. Contiene el contexto y las reglas que aplican sin importar
desde qué Project de Claude.ai llegó el instructivo.

## Sobre el repositorio

- Sitio web de The Showroom Miami, empresa de servicios para vehículos de
  alta gama en el sureste de Florida (showroommiami.com).
- Código generado originalmente por Lovable.dev y sincronizado automáticamente
  con ese proyecto — cualquier cambio acá se refleja en el sitio publicado.
- Repositorio propiedad de un desarrollador externo (`mightworkron`); The
  Showroom Miami tiene acceso de colaborador, no de owner (transferencia de
  ownership pendiente).
- Stack: React / Vite / TypeScript / Tailwind / Supabase, desplegado en Netlify.

## Reglas generales de contenido y código

- Tono: profesional, sin promesas absolutas o no verificables (ej. evitar
  "we accept ALL insurance").
- El brandline **"YOUR CAR. OUR OBSESSION."** nunca se traduce, en ningún idioma.
- Antes de aplicar cambios sobre archivos que afecten copy legal o de seguros,
  mostrar el diff y esperar confirmación explícita antes de hacer commit/push.
- Nunca asumir el estado de negocio (líneas activas, nombres de enum, etc.)
  desde memoria o entrenamiento — siempre confirmar contra gobernanza-tsm
  o directamente contra Supabase antes de escribir código o copy.

La gobernanza del sitio vive en theshowroommiami/gobernanza-tsm (privado).
