import { ShaderChunk } from 'three'

let installed = false

const patch = (name, search, replacement) => {
  const source = ShaderChunk[name]
  if (!source.includes(search)) throw new Error(`HeightFog: chunk "${name}" no coincide con esta versión de three`)
  ShaderChunk[name] = source.replace(search, replacement)
}

export function installHeightFog(ceiling) {
  if (installed) return
  installed = true

  patch('fog_pars_vertex', '#ifdef USE_FOG', '#ifdef USE_FOG\n\tvarying float vFogHeight;')
  patch('fog_vertex', '#ifdef USE_FOG', '#ifdef USE_FOG\n\tvFogHeight = cameraPosition.y + dot( viewMatrix[ 1 ].xyz, mvPosition.xyz );')
  patch('fog_pars_fragment', '#ifdef USE_FOG', '#ifdef USE_FOG\n\tvarying float vFogHeight;')
  patch(
    'fog_fragment',
    'gl_FragColor.rgb = mix(',
    `fogFactor *= 1.0 - smoothstep( 0.0, ${ceiling.toFixed(2)}, vFogHeight );\n\tgl_FragColor.rgb = mix(`
  )
}
