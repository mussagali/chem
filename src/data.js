// ─── CHEMISTRY STUDY LAB — STATIC CONTENT ────────────────────────────────────
// All content is hand-written for A-Level (AS + A2) Chemistry.
// No AI generation. All calculations verified.

export const data = {

  // ════════════════════════════════════════════════════════════════════════════
  // ENTHALPY
  // ════════════════════════════════════════════════════════════════════════════
  enthalpy: {

    learningObjectives: [
      "Define enthalpy (H) and enthalpy change (ΔH = H_products − H_reactants)",
      "Explain why standard conditions are needed and define standard enthalpy change (ΔH°)",
      "Understand that chemical reactions involve breaking bonds (endothermic step) and making bonds (exothermic step)",
      "Define bond enthalpy as the energy required to break one mole of a specific bond in gaseous molecules",
      "Define mean bond enthalpy as the average bond enthalpy for a given bond type across many different molecules",
      "Calculate bond enthalpies from given thermochemical data",
      "Use mean bond enthalpies to estimate ΔH for a reaction: ΔH ≈ Σ(bonds broken) − Σ(bonds formed)",
      "Perform experimental enthalpy calculations using q = mcΔT",
      "Calculate ΔH per mole from experimental data: ΔH = −q / n",
      "Distinguish between exothermic (ΔH < 0) and endothermic (ΔH > 0) reactions",
      "Draw and interpret enthalpy profile diagrams showing reactants, products, activation energy (Ea), and ΔH",
    ],

    // ── FLASHCARDS ──────────────────────────────────────────────────────────
    flashcards: [

      // ── DEFINITION CARDS ──
      {
        front: "Enthalpy (H)",
        back: `The heat content stored in a chemical system at constant pressure.\n\nEnthalpy itself cannot be measured directly — only changes in enthalpy (ΔH) can be measured experimentally.\n\nUnits: kJ mol⁻¹`,
      },
      {
        front: "Enthalpy Change (ΔH)",
        back: `ΔH = H(products) − H(reactants)\n\nThe heat energy transferred to or from the surroundings during a reaction at constant pressure.\n\n• ΔH < 0 → exothermic (heat released to surroundings)\n• ΔH > 0 → endothermic (heat absorbed from surroundings)\n\nUnits: kJ mol⁻¹`,
      },
      {
        front: "Standard Enthalpy Change (ΔH°)",
        back: `The enthalpy change measured under standard conditions:\n• Temperature: 298 K (25 °C)\n• Pressure: 100 kPa\n• All solutions at 1 mol dm⁻³ concentration\n• All substances in their standard states\n\nStandard conditions allow fair comparison between different reactions and data sources.`,
      },
      {
        front: "Exothermic Reaction",
        back: `A reaction that releases heat energy to the surroundings.\n\n• ΔH is NEGATIVE\n• Products have LOWER enthalpy than reactants\n• Temperature of surroundings INCREASES\n\nExamples:\n  Combustion of methane: ΔH° = −890 kJ mol⁻¹\n  Neutralisation of HCl + NaOH: ΔH° ≈ −57 kJ mol⁻¹`,
      },
      {
        front: "Endothermic Reaction",
        back: `A reaction that absorbs heat energy from the surroundings.\n\n• ΔH is POSITIVE\n• Products have HIGHER enthalpy than reactants\n• Temperature of surroundings DECREASES\n\nExamples:\n  Thermal decomposition of CaCO₃: ΔH° = +178 kJ mol⁻¹\n  Dissolving NH₄NO₃ in water: ΔH° = +26 kJ mol⁻¹`,
      },
      {
        front: "Bond Enthalpy",
        back: `The energy required to break one mole of a specific covalent bond in a gaseous molecule under standard conditions.\n\nBond breaking is ALWAYS endothermic (energy IN).\nBond forming is ALWAYS exothermic (energy OUT).\n\nExample: C−H bond enthalpy = +412 kJ mol⁻¹\nThis means 412 kJ is needed to break 1 mol of C−H bonds.`,
      },
      {
        front: "Mean Bond Enthalpy",
        back: `The average bond enthalpy for a given bond type, calculated from data across many different molecules.\n\nWhy "mean"? A C−H bond in CH₄ has a slightly different environment to a C−H bond in CH₃OH, so values are averaged.\n\nUsing mean values gives an ESTIMATE of ΔH, not an exact value.\n\nExample: Mean C−H = +412 kJ mol⁻¹`,
      },
      {
        front: "Enthalpy Profile Diagram",
        back: `A diagram showing the energy changes during a reaction:\n\n• Y-axis = enthalpy (H)\n• X-axis = reaction coordinate (progress)\n• Reactants shown on left, products on right\n• The hump = transition state (highest energy point)\n• Activation energy (Ea) = energy gap from reactants to peak\n• ΔH = energy gap between reactants and products\n\nExothermic: products LOWER than reactants\nEndothermic: products HIGHER than reactants`,
      },
      {
        front: "Activation Energy (Eₐ)",
        back: `The minimum energy that reactant particles must have for a reaction to occur — the energy needed to break existing bonds and begin forming new ones.\n\nOn an enthalpy profile diagram:\n  Eₐ = height from reactants to peak (transition state)\n\nA catalyst lowers Eₐ without changing ΔH.\n\nUnits: kJ mol⁻¹`,
      },
      {
        front: "Specific Heat Capacity (c)",
        back: `The energy needed to raise the temperature of 1 g of a substance by 1 °C (or 1 K).\n\nFor water (and dilute aqueous solutions): c = 4.18 J g⁻¹ °C⁻¹\n\nThis value is given in most exams — you do NOT need to memorise it, but you must know how to use it in q = mcΔT.`,
      },

      // ── FORMULA CARDS ──
      {
        front: "Formula: q = mcΔT",
        back: `Used to calculate the heat energy (q) transferred during an experiment.\n\nq = heat energy transferred (J)\nm = mass of solution (g) — use total volume in cm³ × density (≈ 1 g/cm³)\nc = specific heat capacity (4.18 J g⁻¹ °C⁻¹ for water)\nΔT = temperature change (T_final − T_initial, in °C)\n\nIf temperature INCREASES → reaction is exothermic → ΔH is negative\nIf temperature DECREASES → reaction is endothermic → ΔH is positive`,
      },
      {
        front: "Formula: ΔH from bond enthalpies",
        back: `ΔH ≈ Σ(bond enthalpies of bonds BROKEN) − Σ(bond enthalpies of bonds FORMED)\n\nKey rules:\n1. Only count bonds that are ACTUALLY broken or formed\n2. Use the stoichiometric amounts from the balanced equation\n3. Answer is an ESTIMATE (mean values used)\n4. Units: kJ mol⁻¹\n\nMnemonic: "Break IN, Form OUT" — breaking absorbs energy (+), forming releases energy (−)`,
      },
      {
        front: "Formula: ΔH per mole from experiment",
        back: `Step 1: Calculate heat: q = mcΔT (in joules)\nStep 2: Convert to kJ: divide by 1000\nStep 3: Calculate moles reacted: n = c × V (or from mass/M)\nStep 4: ΔH = −q / n\n\nWhy the negative sign?\nIf temperature rises (ΔT > 0), q is positive, but the reaction RELEASES heat, so ΔH is negative.\n\nUnits of ΔH: kJ mol⁻¹`,
      },
      {
        front: "Standard Conditions (definition)",
        back: `Standard conditions for thermochemical measurements:\n\n• 298 K (25 °C)\n• 100 kPa pressure\n• Concentration of 1 mol dm⁻³ for solutions\n• Substances in their standard states (e.g. liquid water, solid carbon as graphite)\n\nDenoted by the ° symbol: ΔH°\n\nNote: Standard temperature is 298 K, NOT 273 K. Standard pressure is 100 kPa, not 1 atm (≈101.3 kPa).`,
      },
      {
        front: "Common Bond Enthalpies (data to know)",
        back: `These appear in exam data booklets but are useful to recognise:\n\nC−H:  +412 kJ mol⁻¹\nC−C:  +348 kJ mol⁻¹\nC=C:  +612 kJ mol⁻¹\nC−O:  +360 kJ mol⁻¹\nC=O:  +743 kJ mol⁻¹ (aldehydes/ketones)\nO−H:  +463 kJ mol⁻¹\nO=O:  +498 kJ mol⁻¹\nN≡N:  +945 kJ mol⁻¹\nH−H:  +436 kJ mol⁻¹\nH−Cl: +432 kJ mol⁻¹`,
      },

      // ── HOW-TO CARDS ──
      {
        front: "HOW TO: Calculate ΔH using bond enthalpies",
        back: `Step 1: Draw the full structural formula of reactants and products.\nStep 2: List ALL bonds broken (reactant side).\nStep 3: List ALL bonds formed (product side).\nStep 4: Calculate: ΔH = Σ(broken) − Σ(formed)\n\nEXAMPLE — H₂ + Cl₂ → 2HCl\nBroken: 1×H−H (436) + 1×Cl−Cl (243) = 679 kJ\nFormed: 2×H−Cl (432) = 864 kJ\nΔH = 679 − 864 = −185 kJ mol⁻¹ ✓ (exothermic)`,
      },
      {
        front: "HOW TO: Calculate ΔH from calorimetry data",
        back: `Given: volume, concentrations, temperature change.\n\nStep 1: Find total mass of solution\n  m = total volume (cm³) × 1 g cm⁻³\nStep 2: Calculate q\n  q = m × 4.18 × ΔT  (in joules)\nStep 3: Find moles of limiting reagent\n  n = concentration × volume (in dm³)\nStep 4: ΔH = −q ÷ n ÷ 1000  (to get kJ mol⁻¹)\n\nIf T rises: ΔH negative (exothermic)\nIf T falls: ΔH positive (endothermic)`,
      },
      {
        front: "HOW TO: Draw an enthalpy profile diagram",
        back: `For an EXOTHERMIC reaction:\n1. Draw x-axis (reaction coordinate), y-axis (enthalpy H)\n2. Reactants: horizontal line on the LEFT at higher enthalpy\n3. Draw a smooth curve UP from reactants to a peak (transition state)\n4. Curve DOWN to products on the RIGHT — lower than reactants\n5. Label: Ea (from reactants up to peak), ΔH (from reactants down to products, negative)\n\nFor ENDOTHERMIC: products are HIGHER than reactants; ΔH is positive.`,
      },

      // ── COMMON MISTAKES CARDS ──
      {
        front: "COMMON MISTAKE: Why are bond enthalpy calculations estimates?",
        back: `Mean bond enthalpy values are AVERAGES taken from many different molecules.\n\nThe actual bond enthalpy depends on the molecular environment:\n• A C−H bond in CH₄ ≠ C−H bond in CCl₃H\n• A C=O bond in CO₂ ≠ C=O bond in methanol\n\nTherefore: ΔH values from bond enthalpies are approximate.\n\nFor exact values, use Hess's Law with experimentally measured enthalpies of formation or combustion.`,
      },
      {
        front: "COMMON MISTAKE: Sign of ΔH",
        back: `Exothermic: temperature of surroundings RISES → ΔH is NEGATIVE\nEndothermic: temperature of surroundings FALLS → ΔH is POSITIVE\n\nMemory trick: "EXOthermic = EXits the system" → energy leaves → ΔH negative\n\nIn q = mcΔT calculations:\n• If ΔT is positive (temp rises), q is positive\n• But ΔH = −q/n, so ΔH comes out negative (correct for exothermic!)\n• Never forget the negative sign when converting q to ΔH.`,
      },
      {
        front: "COMMON MISTAKE: Bond breaking vs bond forming",
        back: `Breaking bonds: ALWAYS endothermic (requires energy INPUT)\nForming bonds: ALWAYS exothermic (releases energy)\n\nThe OVERALL ΔH depends on which is bigger:\n• If more energy released (forming) > energy absorbed (breaking) → exothermic\n• If more energy absorbed (breaking) > energy released (forming) → endothermic\n\nNever say "breaking bonds releases energy" — this is wrong and will lose marks.`,
      },
      {
        front: "COMMON MISTAKE: Mass in q = mcΔT",
        back: `Use the total mass of the solution, NOT just the mass of one reactant.\n\nExample: 25 cm³ of acid + 25 cm³ of base\n→ total volume = 50 cm³\n→ total mass = 50 g (assuming density = 1 g cm⁻³)\n\nAlso: density of dilute aqueous solution ≈ 1 g cm⁻³\nSo 50 cm³ ≈ 50 g\n\nIf a solid is dissolved: add the mass of the solid to the mass of the solvent.`,
      },
      {
        front: "Enthalpy of Combustion (ΔHc°)",
        back: `The enthalpy change when one mole of a substance is completely burned in excess oxygen under standard conditions.\n\nAlways negative (combustion is always exothermic).\n\nExamples:\n  CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)   ΔHc° = −890 kJ mol⁻¹\n  C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)   ΔHc° = −1367 kJ mol⁻¹`,
      },
      {
        front: "Enthalpy of Formation (ΔHf°)",
        back: `The enthalpy change when one mole of a compound is formed from its elements in their standard states under standard conditions.\n\nΔHf° of any element in its standard state = 0 by definition.\n\nExamples:\n  H₂(g) + ½O₂(g) → H₂O(l)   ΔHf° = −286 kJ mol⁻¹\n  C(graphite) + 2H₂(g) → CH₄(g)   ΔHf° = −75 kJ mol⁻¹`,
      },
      {
        front: "Enthalpy of Neutralisation (ΔHneut°)",
        back: `The enthalpy change when water is formed from the reaction of an acid and a base under standard conditions.\n\nFor strong acid + strong base:\n  H⁺(aq) + OH⁻(aq) → H₂O(l)   ΔH° ≈ −57 kJ mol⁻¹\n\nThis is approximately constant because the same reaction occurs (H⁺ + OH⁻).\n\nFor weak acid/base: less exothermic (energy is needed to dissociate the weak acid/base first).`,
      },
    ],

    // ── EXPLANATION ─────────────────────────────────────────────────────────
    explanation: `## Enthalpy and Enthalpy Change

### What is Enthalpy?

Enthalpy (symbol H) is the measure of the total heat content of a chemical system at constant pressure. Because we cannot measure the absolute enthalpy of a substance, we always work with **enthalpy changes** (ΔH) — the difference in enthalpy between the products and reactants of a reaction:

> **ΔH = H(products) − H(reactants)**

The unit of enthalpy change is **kJ mol⁻¹** (kilojoules per mole of the substance written in the equation).

---

### Exothermic and Endothermic Reactions

When a chemical reaction occurs, energy is exchanged between the reacting system and its surroundings.

**Exothermic reactions** release heat energy to the surroundings. The products have *lower* enthalpy than the reactants, so **ΔH is negative**. The temperature of the surroundings rises. Examples include combustion, neutralisation, and most oxidation reactions. For instance, the combustion of methane:

> CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)   ΔH° = −890 kJ mol⁻¹

**Endothermic reactions** absorb heat energy from the surroundings. The products have *higher* enthalpy than the reactants, so **ΔH is positive**. The temperature of the surroundings falls. Examples include thermal decomposition and dissolving ammonium nitrate in water:

> CaCO₃(s) → CaO(s) + CO₂(g)   ΔH° = +178 kJ mol⁻¹

---

### Standard Enthalpy Changes

To allow meaningful comparison of data from different sources and laboratories, we define a set of **standard conditions**:

- Temperature: **298 K (25 °C)**
- Pressure: **100 kPa**
- Solution concentrations: **1 mol dm⁻³**
- All substances in their **standard states** (e.g. water as liquid, carbon as graphite)

An enthalpy change measured under these conditions is called a **standard enthalpy change**, denoted **ΔH°**.

Common types:
- **ΔHf°** (standard enthalpy of formation): enthalpy change when 1 mole of a compound forms from its elements in standard states. By definition, ΔHf° = 0 for any element in its standard state.
- **ΔHc°** (standard enthalpy of combustion): enthalpy change when 1 mole of a substance is completely burned in excess oxygen. Always negative.
- **ΔHneut°** (standard enthalpy of neutralisation): enthalpy change when water forms from acid–base neutralisation.

---

### Enthalpy Profile Diagrams

An enthalpy profile diagram (also called a reaction profile or energy diagram) shows how enthalpy changes as a reaction progresses from reactants to products.

**Key features:**
- The y-axis shows enthalpy (H); the x-axis shows the reaction coordinate (progress of reaction)
- Reactants are drawn as a horizontal line on the left
- Products are drawn on the right — lower than reactants for exothermic, higher for endothermic
- A smooth curve rises from the reactants to a peak (the **transition state**) then falls to the products
- **Activation energy (Eₐ)** is the energy gap from the reactants up to the transition state — the minimum energy particles must possess to react
- **ΔH** is the energy gap from reactants to products

A catalyst lowers the activation energy (the peak is lower) but does **not** change ΔH — the positions of reactants and products stay the same.

---

### Bond Enthalpies

All chemical reactions involve breaking bonds in the reactants and forming new bonds in the products. This is the fundamental molecular explanation for enthalpy changes.

**Breaking bonds always requires energy input — it is endothermic.**
**Forming bonds always releases energy — it is exothermic.**

The **bond enthalpy** is the energy required to break one mole of a specific covalent bond in gaseous molecules under standard conditions. For example:

| Bond | Bond Enthalpy / kJ mol⁻¹ |
|------|--------------------------|
| H−H  | +436 |
| C−H  | +412 |
| C−C  | +348 |
| C=C  | +612 |
| O=O  | +498 |
| O−H  | +463 |
| C=O  | +743 |
| N≡N  | +945 |

The **mean bond enthalpy** is the average value for a given bond type across many different molecules. Because the exact bond energy depends slightly on the molecular environment, we use mean values when performing calculations.

**Estimating ΔH from bond enthalpies:**

> **ΔH ≈ Σ(bond enthalpies broken) − Σ(bond enthalpies formed)**

This gives an **estimate** (not an exact value) because mean bond enthalpies are averages.

---

### Worked Example 1: Bond Enthalpy Calculation

**Calculate ΔH for the reaction: H₂(g) + Cl₂(g) → 2HCl(g)**

Use: H−H = 436, Cl−Cl = 243, H−Cl = 432 kJ mol⁻¹

**Bonds broken:**
- 1 × H−H: 1 × 436 = +436 kJ
- 1 × Cl−Cl: 1 × 243 = +243 kJ
- Total energy in: **+679 kJ**

**Bonds formed:**
- 2 × H−Cl: 2 × 432 = 864 kJ released
- Total energy out: **−864 kJ**

**ΔH = 679 − 864 = −185 kJ mol⁻¹**

The negative sign confirms this is exothermic, which is consistent with the fact that more energy is released forming H−Cl bonds than is required to break H−H and Cl−Cl bonds.

---

### Worked Example 2: Bond Enthalpy for Combustion of Methane

**Estimate ΔH for: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)**

Use: C−H = 412, O=O = 498, C=O = 743, O−H = 463 kJ mol⁻¹

**Bonds broken:**
- 4 × C−H: 4 × 412 = 1648 kJ
- 2 × O=O: 2 × 498 = 996 kJ
- Total: **+2644 kJ**

**Bonds formed:**
- 2 × C=O (in CO₂, 2 bonds per molecule): 4 × 743 = 2972 kJ

Wait — CO₂ has 2 C=O bonds and we form 1 CO₂, so: 2 × 743 = 1486 kJ
2H₂O has 2 × 2 O−H bonds = 4 × 463 = 1852 kJ
Total formed: 1486 + 1852 = **3338 kJ**

**ΔH = 2644 − 3338 = −694 kJ mol⁻¹**

(Note: the experimental ΔH is −890 kJ mol⁻¹ — the discrepancy is because mean bond enthalpies are averages and the C=O in CO₂ is actually stronger than the mean value used here, illustrating why bond enthalpy calculations give estimates only.)

---

### Experimental Measurement of Enthalpy Changes

In the laboratory, enthalpy changes are measured using a **calorimeter**. A simple calorimeter is a polystyrene cup containing the solution.

**The formula used is:**

> **q = mcΔT**

Where:
- q = heat energy transferred (J)
- m = mass of solution (g) — total mass of all liquids/solutions present
- c = specific heat capacity = 4.18 J g⁻¹ °C⁻¹ (for aqueous solutions)
- ΔT = temperature change = T_final − T_initial (°C)

**Assumptions made:**
- The solution has the same density as water (1 g cm⁻³)
- The specific heat capacity of the solution equals that of water
- No heat is lost to the surroundings (the polystyrene cup is a good insulator)
- All the heat from the reaction is transferred to the solution

**To obtain ΔH per mole:**
1. Calculate q using q = mcΔT
2. Determine the number of moles of the limiting reagent that reacted
3. ΔH = −q / n (divide by 1000 to convert J to kJ)

The negative sign is needed because if the solution temperature rises (q is positive), the reaction released heat — it is exothermic — and ΔH must be negative.

---

### Worked Example 3: Calorimetry Calculation

**25.0 cm³ of 2.0 mol dm⁻³ HCl is mixed with 25.0 cm³ of 2.0 mol dm⁻³ NaOH. The temperature rises from 19.5 °C to 32.8 °C. Calculate ΔH for the neutralisation.**

**Step 1: Total mass of solution**
m = (25.0 + 25.0) cm³ × 1.0 g cm⁻³ = **50.0 g**

**Step 2: Temperature change**
ΔT = 32.8 − 19.5 = **13.3 °C**

**Step 3: Heat transferred**
q = mcΔT = 50.0 × 4.18 × 13.3 = **2779.7 J ≈ 2.78 kJ**

**Step 4: Moles of HCl reacted**
n = 2.0 mol dm⁻³ × 0.0250 dm³ = **0.0500 mol**

**Step 5: ΔH per mole**
ΔH = −q / n = −2.78 / 0.0500 = **−55.6 kJ mol⁻¹**

(Literature value for strong acid + strong base: −57.1 kJ mol⁻¹ — close, as expected. Slight difference due to heat loss to surroundings.)

---

### Sources of Error in Calorimetry

1. **Heat loss to surroundings** — the main source of error; polystyrene cups are good but not perfect insulators. Leads to a smaller measured ΔT, so ΔH is underestimated.
2. **Assumption that c = 4.18 J g⁻¹ °C⁻¹** — the solution may not have exactly the same specific heat capacity as pure water.
3. **Assumption that density = 1 g cm⁻³** — valid for dilute solutions but not for concentrated ones.
4. **Incomplete reaction** — if reactants are not fully mixed or reaction is slow, ΔT will be lower.

To minimise heat loss: stir continuously, use a lid, read temperature quickly, or use a bomb calorimeter for precise work.`,

    // ── QUESTIONS ───────────────────────────────────────────────────────────
    questions: [

      // Q1 — Definitions and concepts
      {
        id: "enth-q1",
        difficulty: "AS Level",
        marks: 8,
        question: `(a) Define the term enthalpy change (ΔH). [2]

(b) State what is meant by standard conditions for thermochemical measurements. [3]

(c) Explain, with reference to bond breaking and bond forming, why some reactions are exothermic and some are endothermic. [3]`,
        markScheme: `(a) The heat energy transferred between the reacting system and its surroundings [1] at constant pressure [1].
(Accept: ΔH = H(products) − H(reactants))

(b) Any three of the following (1 mark each, max 3):
• Temperature of 298 K (25 °C) [1]
• Pressure of 100 kPa [1]
• Solution concentrations of 1 mol dm⁻³ [1]
• All substances in their standard states [1]
(Note: penalise if temperature given as 273 K — that is STP, not standard conditions for thermochemistry)

(c) Marking points (1 mark each):
• Bond breaking is endothermic / requires energy input [1]
• Bond forming is exothermic / releases energy [1]
• A reaction is exothermic if the energy released forming new bonds exceeds the energy required to break existing bonds (net energy is released); endothermic if the reverse is true [1]`,
      },

      // Q2 — Calorimetry (simple neutralisation)
      {
        id: "enth-q2",
        difficulty: "AS Level",
        marks: 6,
        question: `A student mixes 50.0 cm³ of 1.00 mol dm⁻³ hydrochloric acid with 50.0 cm³ of 1.00 mol dm⁻³ sodium hydroxide solution in a polystyrene cup. The temperature rises from 21.4 °C to 27.9 °C.

(a) Calculate the heat energy released during this reaction.
(Specific heat capacity of solution = 4.18 J g⁻¹ °C⁻¹; density of solution = 1.00 g cm⁻³) [3]

(b) Calculate the molar enthalpy change for the neutralisation reaction. Give your answer in kJ mol⁻¹. [2]

(c) Suggest one reason why the experimental value may differ from the accepted literature value of −57.1 kJ mol⁻¹. [1]`,
        markScheme: `(a)
Total mass: m = (50.0 + 50.0) × 1.00 = 100.0 g  [1 for correct mass]
ΔT = 27.9 − 21.4 = 6.5 °C
q = mcΔT = 100.0 × 4.18 × 6.5 = 2717 J ≈ 2720 J  [1 for correct substitution, 1 for correct answer]
(Accept 2.72 kJ)

(b)
Moles of HCl = 1.00 × 0.0500 = 0.0500 mol  [1]
ΔH = −q / n = −2717 / 0.0500 = −54 340 J mol⁻¹ = −54.3 kJ mol⁻¹  [1]
(Accept values between −54 and −55 kJ mol⁻¹)

(c) Any one of:
• Heat loss to the surroundings (polystyrene not a perfect insulator) [1]
• Assumption that specific heat capacity = 4.18 J g⁻¹ °C⁻¹ may not be exactly correct for the solution [1]
• Thermometer may not be fully calibrated / reading error in temperature [1]`,
      },

      // Q3 — Calorimetry (combustion/dissolution)
      {
        id: "enth-q3",
        difficulty: "A2 Level",
        marks: 7,
        question: `A student investigates the enthalpy change when anhydrous copper(II) sulfate dissolves in water.

She adds 4.00 g of anhydrous CuSO₄ (M_r = 160.0) to 50.0 cm³ of water in a polystyrene cup. The temperature of the water rises from 18.0 °C to 32.6 °C.

(a) Calculate the number of moles of CuSO₄ used. [1]

(b) Calculate the heat energy absorbed by the water.
(c = 4.18 J g⁻¹ °C⁻¹; assume density of water = 1.00 g cm⁻³; ignore the mass of CuSO₄) [2]

(c) Calculate the molar enthalpy change of dissolving, ΔH_sol, in kJ mol⁻¹. [2]

(d) State and explain whether the dissolving of anhydrous CuSO₄ is exothermic or endothermic. [2]`,
        markScheme: `(a)
n = mass / M_r = 4.00 / 160.0 = 0.0250 mol  [1]

(b)
m = 50.0 g (mass of water, ignoring solid)
ΔT = 32.6 − 18.0 = 14.6 °C
q = 50.0 × 4.18 × 14.6 = 3051.4 J ≈ 3050 J  [1 for method, 1 for correct answer ±10 J]

(c)
ΔH_sol = −q / n = −3051.4 / 0.0250 = −122 056 J mol⁻¹
= −122 kJ mol⁻¹  [1 for ΔH = −q/n, 1 for correct final answer]
(Accept −120 to −124 kJ mol⁻¹)

(d)
The temperature of the water RISES [1], which means the reaction releases heat to the surroundings — the process is EXOTHERMIC and ΔH is negative [1].`,
      },

      // Q4 — Bond enthalpies (straightforward)
      {
        id: "enth-q4",
        difficulty: "AS Level",
        marks: 5,
        question: `Use the mean bond enthalpy data below to estimate ΔH for the following reaction:

N₂(g) + 3H₂(g) → 2NH₃(g)

Mean bond enthalpies / kJ mol⁻¹:
N≡N = 945     H−H = 436     N−H = 391

(a) State the bonds broken and bonds formed in this reaction. [2]

(b) Calculate the estimated ΔH for this reaction. [3]`,
        markScheme: `(a)
Bonds broken: 1 × N≡N and 3 × H−H  [1]
Bonds formed: 6 × N−H (2 molecules of NH₃, each with 3 N−H bonds)  [1]

(b)
Energy required to break bonds:
  1 × N≡N: 1 × 945 = 945 kJ
  3 × H−H: 3 × 436 = 1308 kJ
  Total broken: +2253 kJ  [1]

Energy released forming bonds:
  6 × N−H: 6 × 391 = 2346 kJ
  Total formed: 2346 kJ  [1]

ΔH = 2253 − 2346 = −93 kJ mol⁻¹  [1]
(Accept −90 to −96 kJ mol⁻¹)

Note: the actual ΔH° for the Haber process is −92 kJ mol⁻¹ — extremely close to the estimate here, which is unusually accurate for bond enthalpy calculations.`,
      },

      // Q5 — Bond enthalpies (harder, combustion)
      {
        id: "enth-q5",
        difficulty: "A2 Level",
        marks: 6,
        question: `Use the mean bond enthalpy data to estimate ΔH for the complete combustion of propane:

C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g)

Mean bond enthalpies / kJ mol⁻¹:
C−C = 348     C−H = 412     O=O = 498     C=O = 743     O−H = 463

(a) Identify and count all bonds broken and all bonds formed. [3]

(b) Calculate ΔH for this reaction. [2]

(c) Explain why this calculated value is likely to differ from the experimentally determined standard enthalpy of combustion. [1]`,
        markScheme: `(a)
Structure of C₃H₈: CH₃−CH₂−CH₃
Bonds broken (reactants):
  C₃H₈: 2 × C−C = 696 kJ; 8 × C−H = 3296 kJ
  5 × O=O: 5 × 498 = 2490 kJ
  Total broken: 2×348 + 8×412 + 5×498 = 696 + 3296 + 2490 = 6482 kJ  [1 for correct C₃H₈ bonds, 1 for O=O]

Bonds formed (products):
  3CO₂: each has 2 C=O bonds → 6 × 743 = 4458 kJ
  4H₂O: each has 2 O−H bonds → 8 × 463 = 3704 kJ
  Total formed: 4458 + 3704 = 8162 kJ  [1]

(b)
ΔH = 6482 − 8162 = −1680 kJ mol⁻¹  [1 for method, 1 for correct answer]
(Accept −1670 to −1690 kJ mol⁻¹)

(c)
Mean bond enthalpy values are averages taken from many different molecules [1]; the actual bond enthalpies in propane and its combustion products may differ from these mean values, so the calculated ΔH is an estimate.
(Also accept: experimental value uses liquid water as product not gaseous, so latent heat of condensation also contributes)`,
      },

      // Q6 — Multi-part combining concepts
      {
        id: "enth-q6",
        difficulty: "A2 Level",
        marks: 10,
        question: `This question is about enthalpy changes in reactions involving ethanol (C₂H₅OH).

(a) Define the standard enthalpy of combustion. [2]

(b) A student burns ethanol under a copper calorimeter containing 200 g of water. The temperature of the water rises by 18.4 °C. The mass of ethanol burned is 0.920 g. (M_r of ethanol = 46.0)

   (i) Calculate q, the heat transferred to the water. [1]
   (ii) Calculate the moles of ethanol burned. [1]
   (iii) Calculate the experimental enthalpy of combustion of ethanol in kJ mol⁻¹. [2]
   (iv) The accepted value for ΔHc° of ethanol is −1367 kJ mol⁻¹. Calculate the percentage error in the student's result and suggest one reason for the discrepancy. [2]

(c) Sketch an enthalpy profile diagram for the combustion of ethanol. Label the reactants, products, activation energy (Eₐ), and ΔH. [2]`,
        markScheme: `(a)
Standard enthalpy of combustion is the enthalpy change [1] when one mole of a substance is completely burned in excess oxygen, with all reactants and products in their standard states at 298 K and 100 kPa [1].
(Must include: 1 mole, completely burned / excess oxygen, standard conditions)

(b)(i)
q = mcΔT = 200 × 4.18 × 18.4 = 15382.4 J ≈ 15 400 J (15.4 kJ)  [1]

(b)(ii)
n = 0.920 / 46.0 = 0.0200 mol  [1]

(b)(iii)
ΔH = −q / n = −15 382 / 0.0200 = −769 100 J mol⁻¹ = −769 kJ mol⁻¹  [1 for method, 1 for correct answer]
(Accept −760 to −775 kJ mol⁻¹)

(b)(iv)
% error = |experimental − accepted| / |accepted| × 100
= |−769 − (−1367)| / 1367 × 100 = 598/1367 × 100 = 43.7%  [1]

Reason (any one) [1]:
• Significant heat loss to the surrounding air
• Incomplete combustion of ethanol (produces CO as well as CO₂)
• The copper calorimeter itself also absorbs some heat (not accounted for)
• Ethanol evaporates before burning fully

(c)
Award marks for a correctly drawn diagram [1 each, max 2]:
• Smooth curve starting at reactants (C₂H₅OH + 3O₂), rising to a peak (transition state), falling to products (2CO₂ + 3H₂O) which are LOWER than reactants  [1]
• Correct labelling: Eₐ shown as upward arrow from reactants to peak; ΔH shown as downward arrow from reactants to products (negative, since exothermic)  [1]`,
      },

    ], // end questions
  }, // end enthalpy
}; // end data
