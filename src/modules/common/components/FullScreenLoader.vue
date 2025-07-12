<template>
  <div class="h-screen flex items-center justify-center w-screen">
    <svg width="70" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <!-- Ojos -->
      <rect class="spinner_zWVm" x="1" y="1" width="7.33" height="7.33" fill="#000000" />       <!-- ojo izquierdo (negro) -->
      <rect class="spinner_E3Wz" x="15.66" y="1" width="7.33" height="7.33" fill="#000000" /> <!-- ojo derecho (negro) -->

      <!-- Espacios neutros -->
      <rect class="spinner_gfyD" x="8.33" y="1" width="7.33" height="7.33" fill="#CCCCCC" />
      <rect class="spinner_T5JJ" x="1" y="8.33" width="7.33" height="7.33" fill="#CCCCCC" />
      <rect class="spinner_g2vs" x="8.33" y="8.33" width="7.33" height="7.33" fill="#CCCCCC" />
      <rect class="spinner_BDNj" x="15.66" y="8.33" width="7.33" height="7.33" fill="#CCCCCC" />
      <rect class="spinner_ctYB" x="1" y="15.66" width="7.33" height="7.33" fill="#CCCCCC" />
      <rect class="spinner_Rszm" x="15.66" y="15.66" width="7.33" height="7.33" fill="#CCCCCC" />

      <!-- Boca: tres rectángulos para sonrisa -->
      <rect class="spinner_rCw3" x="8.33" y="15.66" width="7.33" height="7.33" fill="#FF0000" />   <!-- centro boca -->
      <rect class="smile-left" x="1" y="15.66" width="7.33" height="7.33" fill="#FF0000" />       <!-- lado izquierdo boca -->
      <rect class="smile-right" x="15.66" y="15.66" width="7.33" height="7.33" fill="#FF0000" />  <!-- lado derecho boca -->
    </svg>
  </div>
</template>

<style scoped>
  /* Animaciones base igual que las tuyas */
  .spinner_zWVm {
    animation: spinner_5QiW 1.2s linear infinite, spinner_PnZo 1.2s linear infinite;
  }
  .spinner_gfyD {
    animation: spinner_5QiW 1.2s linear infinite, spinner_4j7o 1.2s linear infinite;
    animation-delay: 0.1s;
  }
  .spinner_T5JJ {
    animation: spinner_5QiW 1.2s linear infinite, spinner_fLK4 1.2s linear infinite;
    animation-delay: 0.1s;
  }
  .spinner_E3Wz {
    animation: spinner_5QiW 1.2s linear infinite, spinner_tDji 1.2s linear infinite;
    animation-delay: 0.2s;
  }
  .spinner_g2vs {
    animation: spinner_5QiW 1.2s linear infinite, spinner_CMiT 1.2s linear infinite;
    animation-delay: 0.2s;
  }
  .spinner_ctYB {
    animation: spinner_5QiW 1.2s linear infinite, spinner_cHKR 1.2s linear infinite;
    animation-delay: 0.2s;
  }
  .spinner_BDNj {
    animation: spinner_5QiW 1.2s linear infinite, spinner_Re6e 1.2s linear infinite;
    animation-delay: 0.3s;
  }
  .spinner_rCw3 {
    animation: spinner_5QiW 1.2s linear infinite, spinner_EJmJ 1.2s linear infinite;
    animation-delay: 0.3s;
  }
  .spinner_Rszm {
    animation: spinner_5QiW 1.2s linear infinite, spinner_YJOP 1.2s linear infinite;
    animation-delay: 0.4s;
  }

  /* Nuevas clases para boca izquierda y derecha animadas igual que central */
  .smile-left {
    animation: spinner_5QiW 1.2s linear infinite, spinner_cHKR 1.2s linear infinite;
    animation-delay: 0.2s;
  }
  .smile-right {
    animation: spinner_5QiW 1.2s linear infinite, spinner_Re6e 1.2s linear infinite;
    animation-delay: 0.3s;
  }

  /* Animaciones de tamaño y posición que ya tenías */
  @keyframes spinner_5QiW {
    0%, 50% {
      width: 7.33px;
      height: 7.33px;
    }
    25% {
      width: 1.33px;
      height: 1.33px;
    }
  }
  @keyframes spinner_PnZo {
    0%, 50% {
      x: 1px;
      y: 1px;
    }
    25% {
      x: 4px;
      y: 4px;
    }
  }
  @keyframes spinner_4j7o {
    0%, 50% {
      x: 8.33px;
      y: 1px;
    }
    25% {
      x: 11.33px;
      y: 4px;
    }
  }
  @keyframes spinner_fLK4 {
    0%, 50% {
      x: 1px;
      y: 8.33px;
    }
    25% {
      x: 4px;
      y: 11.33px;
    }
  }
  @keyframes spinner_tDji {
    0%, 50% {
      x: 15.66px;
      y: 1px;
    }
    25% {
      x: 18.66px;
      y: 4px;
    }
  }
  @keyframes spinner_CMiT {
    0%, 50% {
      x: 8.33px;
      y: 8.33px;
    }
    25% {
      x: 11.33px;
      y: 11.33px;
    }
  }
  @keyframes spinner_cHKR {
    0%, 50% {
      x: 1px;
      y: 15.66px;
    }
    25% {
      x: 4px;
      y: 18.66px;
    }
  }
  @keyframes spinner_Re6e {
    0%, 50% {
      x: 15.66px;
      y: 8.33px;
    }
    25% {
      x: 18.66px;
      y: 11.33px;
    }
  }
  @keyframes spinner_EJmJ {
    0%, 50% {
      x: 8.33px;
      y: 15.66px;
    }
    25% {
      x: 11.33px;
      y: 18.66px;
    }
  }
  @keyframes spinner_YJOP {
    0%, 50% {
      x: 15.66px;
      y: 15.66px;
    }
    25% {
      x: 18.66px;
      y: 18.66px;
    }
  }
</style>
