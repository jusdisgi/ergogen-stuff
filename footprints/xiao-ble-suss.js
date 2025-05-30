// footprint file for ergogen automatically generated by kicad-to-ergogen
// include it in ergogen/src/footprints/index.js using
//     require('path/to/this/file.js')
module.exports = {
    nets: {
      VCC5: 'VCC5',
      GND: 'GND',
      VCC3: 'VCC3',
      RST: 'RST',
      RAW: 'RAW',
      NFC0: 'NFC0',
      NFC1: 'NFC1',
      CLK: 'CLK',
      DIO: 'DIO',
      P0: 'P0',
      P1: 'P1',
      P2: 'P2',
      P3: 'P3',
      P4: 'P4',
      P5: 'P5',
      P6: 'P6',
      P7: 'P7',
      P8: 'P8',
      P9: 'P9',
      P10: 'P10'
    },
    params: {
      class: 'MCU',
      orientation: 'up'
    },
    body: p => {
      const standard = `
        footprint "xiao-ble" (layer "F.Cu") (tedit 61D90095) 
        ${p.at /* parametric position */} 
        (attr smd exclude_from_pos_files) 
        (fp_text reference "${p.ref}" (at -19.3989 -11.28268 ${p.rot}) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 0.889 0.889) (thickness 0.1016))) (tstamp 1c479411-a194-4685-8eeb-e81966c16c7f)) 
        (fp_text value "" (at -19.8434 -0.29718 ${p.rot}) (layer "F.SilkS") hide (effects (font (size 0.6096 0.6096) (thickness 0.0762))) (tstamp d811e9ac-fc59-4c9b-8d93-83a5a9c048b6)) 
        (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 116e44aa-10c6-4541-8b90-5b7a2f5434bd)) 
        (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a1111a45-eeef-42a4-8ca2-b88859685c82)) 
        (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp a6f271d5-ba8a-454d-80cb-5f2f863f2343)) 
        (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp bb88374b-bed5-4557-ac17-b524808b3664)) 
        (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp f5248a36-36cb-4bf1-a463-d1ff91adf3ac))
        ` 
      
      function pins(def_neg, def_pos) {
        return `
        ${p.at /*VCC Side Pins*/ }
        (pad 1 thru_hole oval (at ${def_neg}7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 8a11f86e-586e-495d-a11e-a1e650589934) ${p.net.VCC5.str}) 
        (pad 2 thru_hole oval (at ${def_neg}7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp e4d9ec61-16f7-410d-891d-89481964ef82) ${p.net.GND.str}) 
        (pad 3 thru_hole oval (at ${def_neg}7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 75b890e6-df6d-4a6e-acaa-0870cda0d189) ${p.net.VCC3.str}) 
        (pad 4 thru_hole oval (at ${def_neg}7.62 0 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 1b7a2775-7631-4d4f-8b27-ab588adb3b7d) ${p.net.P10.str}) 
        (pad 5 thru_hole oval (at ${def_neg}7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 2caa1d4c-02f2-443a-a145-dc5854878c73) ${p.net.P9.str}) 
        (pad 6 thru_hole oval (at ${def_neg}7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 761a1a33-98a4-41af-9660-18c12d51b442) ${p.net.P8.str}) 
        (pad 7 thru_hole oval (at ${def_neg}7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp a20b891b-a240-411f-9914-9ac989f03074) ${p.net.P7.str}) 
        (pad 8 thru_hole circle (at ${def_neg}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp b370e60c-b738-4596-b4de-5ade258f269e) ${p.net.CLK.str}) 
        (pad 9 thru_hole circle (at ${def_neg}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 0a24ded2-bf71-4e3b-b256-1f46996c2720) ${p.net.GND.str}) 
        
        ${p.at /* Reset button Side */ }
        (pad 12 thru_hole oval (at ${def_pos}7.62 7.62 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 9c4384c0-9a57-4262-8711-eec9b8ecb4c6) ${p.net.P6.str}) 
        (pad 13 thru_hole oval (at ${def_pos}7.62 5.08 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 867e444b-3681-4baf-9d08-1188c3544771) ${p.net.P5.str}) 
        (pad 14 thru_hole oval (at ${def_pos}7.62 2.54 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 0a4f1792-568b-402b-9700-fd4b01130ff8) ${p.net.P4.str}) 
        (pad 15 thru_hole oval (at ${def_pos}7.62 0 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 4522c285-a407-4012-88ce-5549f5f2a2d9) ${p.net.P3.str}) 
        (pad 16 thru_hole oval (at ${def_pos}7.62 -2.54 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 890f2928-0780-4ddd-8ccb-24fccaa5c6fc) ${p.net.P2.str}) 
        (pad 17 thru_hole oval (at ${def_pos}7.62 -5.08 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp 2338eb22-64ca-4f30-8ba1-2f7cf75ffba1) ${p.net.P1.str}) 
        (pad 18 thru_hole oval (at ${def_pos}7.62 -7.62 ${180 + p.rot}) (size 2.75 1.8) (drill 1 (offset ${def_neg}0.475 0)) (layers *.Cu *.Mask) (tstamp ae516570-a837-4ec7-a722-6d190e57c256) ${p.net.P0.str}) 
        (pad 19 thru_hole circle (at ${def_pos}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 19c0bd2b-6b0e-4d97-a0be-01d0c6efb6b0) ${p.net.DIO.str}) 
        (pad 20 thru_hole circle (at ${def_pos}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 5aa3a350-81ea-4759-8164-45e4cfc68b3a) ${p.net.RST.str}) 
        
        ${p.at /* Battery Pins */ }
        (pad 21 thru_hole circle (at ${def_pos}4.445 -0.317 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 79509df8-dd6d-474b-bcaa-263daec27871) ${p.net.RAW.str}) 
        (pad 22 thru_hole circle (at ${def_pos}4.445 -2.222 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) (tstamp 4a564fab-879b-49c4-b927-6f8f249dc7f0) ${p.net.GND.str}) 
        
        `
      }
      if (p.param.orientation == 'up') {
        return `(
        ${standard}
        ${pins('-', '')}
        )
        `
      } else {
        return `(
        ${standard}
        ${pins('', '-')}
        )
        `        
      }
    }
  }
