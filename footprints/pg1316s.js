module.exports = {
  params: {
    designator: 'DISP',
    side: 'F',
    SCK: {type: 'net', value: 'SCK'},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    CS: {type: 'net', value: 'CS'},
    show_optional: {type: 'boolean', value: true},
  },
  body: p => {
    const standard = `
      ${'' /* Add the kicad_mod content here*/}
    (footprint "CPG1316S01D02_mikeholscher" (version 20240108) (generator "pcbnew") (generator_version "8.0")
  (layer "F.Cu")
  (property "Reference" "CPG1316" (at 0 0 0)(unlocked yes)
 (layer "Cmts.User")(hide yes)
(uuid "ad62f3be-e718-4e89-881e-b73cd7290d03")
    (effects (font (size 1 1) (thickness 0.1)))
  )
  (property "Value" "CPG1316S01D02_mikeholscher" (at 0 9 0)(unlocked yes)
 (layer "Cmts.User")(hide yes)
(uuid "015e2493-8031-4566-a0b9-0587851c9e48")
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (property "Footprint" "Custom:CPG1316S01D02_mikeholscher" (at 0 10.85 0)(unlocked yes)
 (layer "F.Fab")(hide yes)
(uuid "b936d8b9-6dc7-4e96-9747-5ed58e40d4ae")
    (effects (font (size 1.27 1.27)))
  )
  (property "Datasheet" "" (at 0 0 0)(unlocked yes)
 (layer "F.Fab")(hide yes)
(uuid "b89fa756-936d-44fa-aa20-6eec8ccede68")
    (effects (font (size 1.27 1.27)))
  )
  (property "Description" "" (at 0 0 0)(unlocked yes)
 (layer "F.Fab")(hide yes)
(uuid "caa868a1-2067-49c5-9642-3aded1cc9142")
    (effects (font (size 1.27 1.27)))
  )
  (attr smd)
  (fp_poly
    (pts
      (xy 3.8 -3.5)
      (xy 3.8 -1.65)
      (xy 3.3 -1.15)
      (xy -2.2 -1.15)
      (xy -2.2 -3.9)
      (xy 2.2 -3.9)
      (xy 2.2 -3.5)
    )
    (stroke (width 0.1) (type solid)) (fill none) (layer "Dwgs.User")(uuid "108ced6d-a46c-4f12-aae0-06b4cba99e35"))
  (fp_circle (center -5.8 2.75) (end -5.3 2.75)
    (stroke (width 0.1) (type default)) (fill none) (layer "Edge.Cuts")(uuid "566dba42-32d0-4b4c-8f7a-5bb15ff27cbf"))
  (fp_circle (center 5.8 -2.75) (end 6.4 -2.75)
    (stroke (width 0.1) (type default)) (fill none) (layer "Edge.Cuts")(uuid "373791d6-d4ce-4646-8332-c971122dd698"))
  (fp_rect (start -8 8) (end 8 -8)
    (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab")(uuid "c6ee7ca7-0f91-4bf2-8b14-a482349fa160"))
  (fp_rect (start -6.75 -6.5) (end 6.75 6.5)
    (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab")(uuid "e4d1daaa-fd44-4463-b94c-0aa1f91f701d"))
  (pad "1" smd rect (at -2.5 2.65) (size 1.55 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "b16ef624-f803-4629-b8d3-ee13895d7e96")
  )
  (pad "2" smd rect (at 2.5 2.65) (size 1.55 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "583c2dd3-7257-4205-bf03-9b082d228f40")
  )
  (pad "3" smd rect (at -6.35 -6) (size 2 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "e312cf65-691b-4c88-9647-c49e7179fa47")
  )
  (pad "3" smd rect (at -6.35 6) (size 2 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "683f6387-90aa-4353-9dee-17bc5b8a40ef")
  )
  (pad "3" smd rect (at 6.35 -6) (size 2 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "c83e9bdd-e09b-486a-aa22-105a7a5fdb89")
  )
  (pad "3" smd rect (at 6.35 6) (size 2 2) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
(uuid "f826a543-33f3-4940-aa71-eae2ebdd2a5e")
  )

    `
    const optional = `
      ${'' /* Add the optional parts here */}

      `
    return `
      ${standard}
      ${p.show_optional ? optional : ''}
      )
    `
  }
}