import{j as Q}from"./jsx-runtime.D_zvdyIk.js";import{r as X}from"./index.-iFofLld.js";/* empty css                           */const lt=2;function st({SIM_RESOLUTION:U=128,DYE_RESOLUTION:Y=1440,CAPTURE_RESOLUTION:Z=512,DENSITY_DISSIPATION:C=3.5,VELOCITY_DISSIPATION:P=2,PRESSURE:w=.1,PRESSURE_ITERATIONS:Ee=20,CURL:Se=3,SPLAT_RADIUS:De=.2,SPLAT_FORCE:ye=6e3,SHADING:Ae=!0,COLOR_UPDATE_SPEED:we=10,BACK_COLOR:vt={r:.5,g:0,b:0},TRANSPARENT:dt=!0,RAINBOW_MODE:_e=!0,COLOR:Fe="#ff0000"}){const $=X.useRef(null),S=X.useRef(null);return X.useEffect(()=>{const l=$.current;if(!l)return;let M=!0;function Le(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let v={SIM_RESOLUTION:U,DYE_RESOLUTION:Y,DENSITY_DISSIPATION:C,VELOCITY_DISSIPATION:P,PRESSURE:w,PRESSURE_ITERATIONS:Ee,CURL:Se,SPLAT_RADIUS:De,SPLAT_FORCE:ye,SHADING:Ae,COLOR_UPDATE_SPEED:we,RAINBOW_MODE:_e,COLOR:Fe},_=[new Le];const{gl:t,ext:R}=be(l);if(!t)return;R.supportLinearFiltering||(v.DYE_RESOLUTION=256,v.SHADING=!1);function be(e){const r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let i=e.getContext("webgl2",r);const o=!!i;if(o||(i=e.getContext("webgl",r)||e.getContext("experimental-webgl",r)),!i)return{gl:null,ext:{}};let n,a;o?(i.getExtension("EXT_color_buffer_float"),a=i.getExtension("OES_texture_float_linear")):(n=i.getExtension("OES_texture_half_float"),a=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,1);const u=o?i.HALF_FLOAT:n&&n.HALF_FLOAT_OES;let f,s,g;return o?(f=D(i,i.RGBA16F,i.RGBA,u),s=D(i,i.RG16F,i.RG,u),g=D(i,i.R16F,i.RED,u)):(f=D(i,i.RGBA,i.RGBA,u),s=D(i,i.RGBA,i.RGBA,u),g=D(i,i.RGBA,i.RGBA,u)),{gl:i,ext:{formatRGBA:f,formatRG:s,formatR:g,halfFloatTexType:u,supportLinearFiltering:a}}}function D(e,r,i,o){if(!Ue(e,r,i,o))switch(r){case e.R16F:return D(e,e.RG16F,e.RG,o);case e.RG16F:return D(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:r,format:i}}function Ue(e,r,i,o){const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,i,o,null);const a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}class Pe{constructor(r,i){this.vertexShader=r,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(r){let i=0;for(let n=0;n<r.length;n++)i+=ct(r[n]);let o=this.programs[i];if(o==null){let n=h(t.FRAGMENT_SHADER,this.fragmentShaderSource,r);o=ee(this.vertexShader,n),this.programs[i]=o}o!==this.activeProgram&&(this.uniforms=te(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class E{constructor(r,i){this.uniforms={},this.program=ee(r,i),this.uniforms=te(this.program)}bind(){t.useProgram(this.program)}}function ee(e,r){let i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(i)),i}function te(e){let r=[],i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;o++){let n=t.getActiveUniform(e,o).name;r[n]=t.getUniformLocation(e,n)}return r}function h(e,r,i){r=Be(r,i);const o=t.createShader(e);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(o)),o}function Be(e,r){if(!r)return e;let i="";return r.forEach(o=>{i+="#define "+o+`
`}),i+e}const p=h(t.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),Xe=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),Ce=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),Me=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,Ne=h(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),ze=h(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,R.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ie=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),Oe=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),Ge=h(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),Ye=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),Ve=h(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),m=(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,r=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),r&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});let d,c,V,H,y;const re=new E(p,Xe),W=new E(p,Ce),A=new E(p,Ne),x=new E(p,ze),k=new E(p,Ie),K=new E(p,Oe),L=new E(p,Ge),N=new E(p,Ye),z=new E(p,Ve),I=new Pe(p,Me);function ie(){let e=ve(v.SIM_RESOLUTION),r=ve(v.DYE_RESOLUTION);const i=R.halfFloatTexType,o=R.formatRGBA,n=R.formatRG,a=R.formatR,u=R.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),d?d=oe(d,r.width,r.height,o.internalFormat,o.format,i,u):d=j(r.width,r.height,o.internalFormat,o.format,i,u),c?c=oe(c,e.width,e.height,n.internalFormat,n.format,i,u):c=j(e.width,e.height,n.internalFormat,n.format,i,u),V=b(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST),H=b(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST),y=j(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST)}function b(e,r,i,o,n,a){t.activeTexture(t.TEXTURE0);let u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,e,r,0,o,n,null);let f=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,f),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,r),t.clear(t.COLOR_BUFFER_BIT);let s=1/e,g=1/r;return{texture:u,fbo:f,width:e,height:r,texelSizeX:s,texelSizeY:g,attach(F){return t.activeTexture(t.TEXTURE0+F),t.bindTexture(t.TEXTURE_2D,u),F}}}function j(e,r,i,o,n,a){let u=b(e,r,i,o,n,a),f=b(e,r,i,o,n,a);return{width:e,height:r,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(s){u=s},get write(){return f},set write(s){f=s},swap(){let s=u;u=f,f=s}}}function He(e,r,i,o,n,a,u){let f=b(r,i,o,n,a,u);return re.bind(),t.uniform1i(re.uniforms.uTexture,e.attach(0)),m(f),f}function oe(e,r,i,o,n,a,u){return e.width===r&&e.height===i||(e.read=He(e.read,r,i,o,n,a,u),e.write=b(r,i,o,n,a,u),e.width=r,e.height=i,e.texelSizeX=1/r,e.texelSizeY=1/i),e}function We(){let e=[];v.SHADING&&e.push("SHADING"),I.setKeywords(e)}We(),ie();let q=Date.now(),O=0,B=!1;function ne(){B||!M||(B=!0,q=Date.now(),S.current=requestAnimationFrame(le))}function ae(){B=!1,S.current&&(cancelAnimationFrame(S.current),S.current=null)}function ue(){document.hidden?ae():ne()}function ce(e){e.preventDefault(),M=!1,ae()}function le(){if(!M){B=!1;return}const e=ke();Ke()&&ie(),je(e),qe(),Je(e),Qe(null),S.current=requestAnimationFrame(le)}function ke(){let e=Date.now(),r=(e-q)/1e3;return r=Math.min(r,.016666),q=e,r}function Ke(){let e=T(l.clientWidth),r=T(l.clientHeight);return l.width!==e||l.height!==r?(l.width=e,l.height=r,!0):!1}function je(e){O+=e*v.COLOR_UPDATE_SPEED,O>=1&&(O=ut(O,0,1),_.forEach(r=>{r.color=G()}))}function qe(){_.forEach(e=>{e.moved&&(e.moved=!1,$e(e))})}function Je(e){t.disable(t.BLEND),K.bind(),t.uniform2f(K.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(K.uniforms.uVelocity,c.read.attach(0)),m(H),L.bind(),t.uniform2f(L.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(L.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(L.uniforms.uCurl,H.attach(1)),t.uniform1f(L.uniforms.curl,v.CURL),t.uniform1f(L.uniforms.dt,e),m(c.write),c.swap(),k.bind(),t.uniform2f(k.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(k.uniforms.uVelocity,c.read.attach(0)),m(V),W.bind(),t.uniform1i(W.uniforms.uTexture,y.read.attach(0)),t.uniform1f(W.uniforms.value,v.PRESSURE),m(y.write),y.swap(),N.bind(),t.uniform2f(N.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(N.uniforms.uDivergence,V.attach(0));for(let i=0;i<v.PRESSURE_ITERATIONS;i++)t.uniform1i(N.uniforms.uPressure,y.read.attach(1)),m(y.write),y.swap();z.bind(),t.uniform2f(z.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(z.uniforms.uPressure,y.read.attach(0)),t.uniform1i(z.uniforms.uVelocity,c.read.attach(1)),m(c.write),c.swap(),x.bind(),t.uniform2f(x.uniforms.texelSize,c.texelSizeX,c.texelSizeY),R.supportLinearFiltering||t.uniform2f(x.uniforms.dyeTexelSize,c.texelSizeX,c.texelSizeY);let r=c.read.attach(0);t.uniform1i(x.uniforms.uVelocity,r),t.uniform1i(x.uniforms.uSource,r),t.uniform1f(x.uniforms.dt,e),t.uniform1f(x.uniforms.dissipation,v.VELOCITY_DISSIPATION),m(c.write),c.swap(),R.supportLinearFiltering||t.uniform2f(x.uniforms.dyeTexelSize,d.texelSizeX,d.texelSizeY),t.uniform1i(x.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(x.uniforms.uSource,d.read.attach(1)),t.uniform1f(x.uniforms.dissipation,v.DENSITY_DISSIPATION),m(d.write),d.swap()}function Qe(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),Ze(e)}function Ze(e){let r=t.drawingBufferWidth,i=t.drawingBufferHeight;I.bind(),v.SHADING&&t.uniform2f(I.uniforms.texelSize,1/r,1/i),t.uniform1i(I.uniforms.uTexture,d.read.attach(0)),m(e)}function $e(e){let r=e.deltaX*v.SPLAT_FORCE,i=e.deltaY*v.SPLAT_FORCE;se(e.texcoordX,e.texcoordY,r,i,e.color)}function et(e){const r=G();r.r*=10,r.g*=10,r.b*=10;let i=10*(Math.random()-.5),o=30*(Math.random()-.5);se(e.texcoordX,e.texcoordY,i,o,r)}function se(e,r,i,o,n){A.bind(),t.uniform1i(A.uniforms.uTarget,c.read.attach(0)),t.uniform1f(A.uniforms.aspectRatio,l.width/l.height),t.uniform2f(A.uniforms.point,e,r),t.uniform3f(A.uniforms.color,i,o,0),t.uniform1f(A.uniforms.radius,tt(v.SPLAT_RADIUS/100)),m(c.write),c.swap(),t.uniform1i(A.uniforms.uTarget,d.read.attach(0)),t.uniform3f(A.uniforms.color,n.r,n.g,n.b),m(d.write),d.swap()}function tt(e){let r=l.width/l.height;return r>1&&(e*=r),e}function fe(e,r,i,o){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=i/l.width,e.texcoordY=1-o/l.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=G()}function J(e,r,i,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/l.width,e.texcoordY=1-i/l.height,e.deltaX=it(e.texcoordX-e.prevTexcoordX),e.deltaY=ot(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function rt(e){e.down=!1}function it(e){let r=l.width/l.height;return r<1&&(e*=r),e}function ot(e){let r=l.width/l.height;return r>1&&(e/=r),e}function nt(e){let r=e.replace("#","");r.length===3&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]);const i=parseInt(r.slice(0,2),16)/255,o=parseInt(r.slice(2,4),16)/255,n=parseInt(r.slice(4,6),16)/255;return{r:i*.15,g:o*.15,b:n*.15}}function G(){if(!v.RAINBOW_MODE)return nt(v.COLOR);let e=at(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function at(e,r,i){let o,n,a,u,f,s,g,F;switch(u=Math.floor(e*6),f=e*6-u,s=i*(1-r),g=i*(1-f*r),F=i*(1-(1-f)*r),u%6){case 0:o=i,n=F,a=s;break;case 1:o=g,n=i,a=s;break;case 2:o=s,n=i,a=F;break;case 3:o=s,n=g,a=i;break;case 4:o=F,n=s,a=i;break;case 5:o=i,n=s,a=g;break}return{r:o,g:n,b:a}}function ut(e,r,i){const o=i-r;return(e-r)%o+r}function ve(e){let r=t.drawingBufferWidth/t.drawingBufferHeight;r<1&&(r=1/r);const i=Math.round(e),o=Math.round(e*r);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:i}:{width:i,height:o}}function T(e){const r=Math.min(window.devicePixelRatio||1,lt);return Math.floor(e*r)}function ct(e){if(e.length===0)return 0;let r=0;for(let i=0;i<e.length;i++)r=(r<<5)-r+e.charCodeAt(i),r|=0;return r}function de(e){let r=_[0],i=T(e.clientX),o=T(e.clientY);fe(r,-1,i,o),et(r)}let me=!1;function he(e){let r=_[0],i=T(e.clientX),o=T(e.clientY);if(me)J(r,i,o,r.color);else{let n=G();J(r,i,o,n),me=!0}}function xe(e){const r=e.targetTouches;let i=_[0];for(let o=0;o<r.length;o++){let n=T(r[o].clientX),a=T(r[o].clientY);fe(i,r[o].identifier,n,a)}}function pe(e){const r=e.targetTouches;let i=_[0];for(let o=0;o<r.length;o++){let n=T(r[o].clientX),a=T(r[o].clientY);J(i,n,a,i.color)}}function Te(e){const r=e.changedTouches;let i=_[0];for(let o=0;o<r.length;o++)rt(i)}return window.addEventListener("mousedown",de),window.addEventListener("mousemove",he),window.addEventListener("touchstart",xe),window.addEventListener("touchmove",pe,!1),window.addEventListener("touchend",Te),document.addEventListener("visibilitychange",ue),l.addEventListener("webglcontextlost",ce),ne(),()=>{M=!1,B=!1,S.current&&(cancelAnimationFrame(S.current),S.current=null),window.removeEventListener("mousedown",de),window.removeEventListener("mousemove",he),window.removeEventListener("touchstart",xe),window.removeEventListener("touchmove",pe),window.removeEventListener("touchend",Te),document.removeEventListener("visibilitychange",ue),l.removeEventListener("webglcontextlost",ce)}},[]),Q.jsx("div",{className:"splash-cursor","aria-hidden":"true",children:Q.jsx("canvas",{ref:$,id:"fluid",className:"splash-cursor-canvas"})})}const ge=["(min-width: 48rem)","(hover: hover)","(pointer: fine)"],Re="(prefers-reduced-motion: reduce)";function ft(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:ge.every(U=>window.matchMedia(U).matches)&&!window.matchMedia(Re).matches}function pt(U){const[Y,Z]=X.useState(!1);return X.useEffect(()=>{const C=[...ge,Re].map(w=>window.matchMedia(w)),P=()=>Z(ft());P();for(const w of C)w.addEventListener("change",P);return()=>{for(const w of C)w.removeEventListener("change",P)}},[]),Y?Q.jsx(st,{...U}):null}export{pt as default};
