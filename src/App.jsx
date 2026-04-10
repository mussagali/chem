import { useState, useEffect, useCallback } from "react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const COLORS = {
  bg: "#0d1b2a",
  surface: "#112236",
  surfaceHover: "#162b42",
  border: "#1e3a52",
  text: "#f5f0e8",
  muted: "#8ba3b8",
  energetics: "#f59e0b",
  kinetics: "#38bdf8",
  equilibria: "#34d399",
  acids: "#a78bfa",
};

const TOPIC_COLORS = {
  Energetics: COLORS.energetics,
  Kinetics: COLORS.kinetics,
  Equilibria: COLORS.equilibria,
  "Acids & Bases": COLORS.acids,
};

const OBJECTIVES = [
  {
    id: "11.3.1.1", topic: "Energetics",
    text: "11.3.1.1 Understand and be able to define enthalpy and enthalpy change (ΔH)",
  },
  {
    id: "11.3.1.2", topic: "Energetics",
    text: "11.3.1.2 Understand the need for standard enthalpies and be able to define standard enthalpy",
  },
  {
    id: "11.3.1.3", topic: "Energetics",
    text: "11.3.1.3 Understand that chemical reactions involve the making and breaking of bonds and the concept of bond enthalpy",
  },
  {
    id: "11.3.1.4", topic: "Energetics",
    text: "11.3.1.4 Be able to determine bond enthalpies from data",
  },
  {
    id: "11.3.1.5", topic: "Energetics",
    text: "11.3.1.5 Be able to use mean bond enthalpies to estimate ΔH for reactions",
  },
  {
    id: "11.3.1.6", topic: "Energetics",
    text: "11.3.1.6 Be able to determine simple enthalpy changes experimentally and calculate enthalpy change from experimental data",
  },
  {
    id: "11.3.1.7", topic: "Energetics",
    text: "11.3.1.7 Know the definition of Hess's Law and be able to use it to calculate enthalpy changes in reactions",
  },
  {
    id: "11.3.2.3", topic: "Kinetics",
    text: "11.3.2.3 Understand the importance of energy in gas and liquid collisions: the Maxwell-Boltzmann distribution and activation energy",
  },
  {
    id: "11.3.2.4", topic: "Kinetics",
    text: "11.3.2.4 Use these concepts to give a comprehensive account of the effects of temperature and concentration on the rate of a reaction",
  },
  {
    id: "11.3.2.5", topic: "Kinetics",
    text: "11.3.2.5 Understand that the rate of a chemical process can be represented by a rate equation",
  },
  {
    id: "11.3.2.6", topic: "Kinetics",
    text: "11.3.2.6 Recall the general rate equation and understand the rate constant and the order of reaction",
  },
  {
    id: "11.3.2.7", topic: "Kinetics",
    text: "11.3.2.7 Be able to investigate how the rate of a reaction changes with changing conditions",
  },
  {
    id: "11.3.2.8", topic: "Kinetics",
    text: "11.3.2.8 Be able to carry out simple calculations of rates and rate constants",
  },
  {
    id: "11.3.3.1", topic: "Equilibria",
    text: "11.3.3.1 Recall and be able to use ideas from previous teaching on equilibria, including the concept of dynamic equilibrium",
  },
  {
    id: "11.3.3.2", topic: "Equilibria",
    text: "11.3.3.2 Be able to predict the effects of change of temperature, concentration and pressure on equilibria",
  },
  {
    id: "11.3.3.3", topic: "Equilibria",
    text: "11.3.3.3 Understand why a catalyst does not affect the position of equilibrium",
  },
  {
    id: "11.3.3.4", topic: "Equilibria",
    text: "11.3.3.4 Understand the importance of equilibria in industrial chemistry",
  },
  {
    id: "11.3.3.5", topic: "Equilibria",
    text: "11.3.3.5 Understand (with examples) why reaction conditions for industrial processes involving equilibria are often a compromise",
  },
  {
    id: "11.3.3.6", topic: "Equilibria",
    text: "11.3.3.6 Be able to write the equilibrium constant (Kc) for a given reaction",
  },
  {
    id: "11.3.3.7", topic: "Equilibria",
    text: "11.3.3.7 Be able to predict the effect of changing temperature on Kc and understand that Kc is not affected by changes in concentration or the addition of a catalyst",
  },
  {
    id: "11.3.4.1", topic: "Acids & Bases",
    text: "11.3.4.1 Understand acidity/alkalinity in aqueous solution and that, in this medium, the approaches of Arrhenius and Brønsted-Lowry are equivalent",
  },
  {
    id: "11.3.4.2", topic: "Acids & Bases",
    text: "11.3.4.2 Recognise that in aqueous solution acids are proton donors and bases are proton acceptors",
  },
  {
    id: "11.3.4.3", topic: "Acids & Bases",
    text: "11.3.4.3 Understand pH as -log10[H+], and be able to convert pH to concentration and the reverse; calculate pH for a strong acid",
  },
  {
    id: "11.3.4.4", topic: "Acids & Bases",
    text: "11.3.4.4 Be able to calculate the pH of a strong acid",
  },
  {
    id: "11.3.4.5", topic: "Acids & Bases",
    text: "11.3.4.5 Know that water is weakly dissociated",
  },
  {
    id: "11.3.4.6", topic: "Acids & Bases",
    text: "11.3.4.6 Know the ionic product of water, Kw, and that Kw = [H+][OH-]",
  },
  {
    id: "11.3.4.7", topic: "Acids & Bases",
    text: "11.3.4.7 Be able to calculate pH of a strong base",
  },
  {
    id: "11.3.4.8", topic: "Acids & Bases",
    text: "11.3.4.8 Understand that weak acids and bases dissociate slightly in water",
  },
  {
    id: "11.3.4.9", topic: "Acids & Bases",
    text: "11.3.4.9 Be able to write and perform calculations with Ka",
  },
  {
    id: "11.3.4.10", topic: "Acids & Bases",
    text: "11.3.4.10 Know pKa, pKb and pKw and be able to use the equation pKw = pKa + pKb",
  },
  {
    id: "11.3.4.11", topic: "Acids & Bases",
    text: "11.3.4.11 Understand how to obtain and work with pH curves for the various acid/base combinations",
  },
  {
    id: "11.3.4.12", topic: "Acids & Bases",
    text: "11.3.4.12 Understand indicators as having a characteristic pH at their endpoint and be able to use this to choose an appropriate indicator for a titration",
  },
  {
    id: "11.3.4.13", topic: "Acids & Bases",
    text: "11.3.4.13 Be able to carry out titrations and the associated calculations",
  },
  {
    id: "11.3.4.14", topic: "Acids & Bases",
    text: "11.3.4.14 Understand the action of acidic and basic buffer solutions qualitatively in terms of equilibria",
  },
  {
    id: "11.3.4.15", topic: "Acids & Bases",
    text: "11.3.4.15 Be able to calculate the pH of a buffer solution",
  },
  {
    id: "11.3.4.16", topic: "Acids & Bases",
    text: "11.3.4.16 Know some uses of buffer solutions",
  },
];

const EXPLAIN_TOPICS = [
  { group: "── Energetics ──", disabled: true },
  { value: "11.3.1.1", label: "11.3.1.1 Enthalpy & ΔH", topic: "Energetics" },
  { value: "11.3.1.2", label: "11.3.1.2 Standard Enthalpy", topic: "Energetics" },
  { value: "11.3.1.3", label: "11.3.1.3 Bond Enthalpy Concept", topic: "Energetics" },
  { value: "11.3.1.4", label: "11.3.1.4 Determining Bond Enthalpies", topic: "Energetics" },
  { value: "11.3.1.5", label: "11.3.1.5 Mean Bond Enthalpies & ΔH", topic: "Energetics" },
  { value: "11.3.1.6", label: "11.3.1.6 Experimental Enthalpy", topic: "Energetics" },
  { value: "11.3.1.7", label: "11.3.1.7 Hess's Law", topic: "Energetics" },
  { group: "── Kinetics ──", disabled: true },
  { value: "11.3.2.3", label: "11.3.2.3 Maxwell-Boltzmann & Activation Energy", topic: "Kinetics" },
  { value: "11.3.2.4", label: "11.3.2.4 Temperature & Concentration Effects", topic: "Kinetics" },
  { value: "11.3.2.5", label: "11.3.2.5 Rate Equations", topic: "Kinetics" },
  { value: "11.3.2.6", label: "11.3.2.6 Rate Constant & Order of Reaction", topic: "Kinetics" },
  { value: "11.3.2.7", label: "11.3.2.7 Investigating Rate Changes", topic: "Kinetics" },
  { value: "11.3.2.8", label: "11.3.2.8 Rate Calculations", topic: "Kinetics" },
  { group: "── Equilibria ──", disabled: true },
  { value: "11.3.3.1", label: "11.3.3.1 Dynamic Equilibrium", topic: "Equilibria" },
  { value: "11.3.3.2", label: "11.3.3.2 Le Chatelier's Principle", topic: "Equilibria" },
  { value: "11.3.3.3", label: "11.3.3.3 Catalysts & Equilibrium", topic: "Equilibria" },
  { value: "11.3.3.4", label: "11.3.3.4 Industrial Equilibria", topic: "Equilibria" },
  { value: "11.3.3.5", label: "11.3.3.5 Industrial Compromise Conditions", topic: "Equilibria" },
  { value: "11.3.3.6", label: "11.3.3.6 Writing Kc", topic: "Equilibria" },
  { value: "11.3.3.7", label: "11.3.3.7 Effects on Kc", topic: "Equilibria" },
  { group: "── Acids & Bases ──", disabled: true },
  { value: "11.3.4.1", label: "11.3.4.1 Acid-Base Theories", topic: "Acids & Bases" },
  { value: "11.3.4.2", label: "11.3.4.2 Proton Donors & Acceptors", topic: "Acids & Bases" },
  { value: "11.3.4.3", label: "11.3.4.3 pH & [H⁺] Conversions", topic: "Acids & Bases" },
  { value: "11.3.4.4", label: "11.3.4.4 pH of Strong Acid", topic: "Acids & Bases" },
  { value: "11.3.4.5", label: "11.3.4.5 Dissociation of Water", topic: "Acids & Bases" },
  { value: "11.3.4.6", label: "11.3.4.6 Kw — Ionic Product of Water", topic: "Acids & Bases" },
  { value: "11.3.4.7", label: "11.3.4.7 pH of Strong Base", topic: "Acids & Bases" },
  { value: "11.3.4.8", label: "11.3.4.8 Weak Acids & Bases", topic: "Acids & Bases" },
  { value: "11.3.4.9", label: "11.3.4.9 Ka Calculations", topic: "Acids & Bases" },
  { value: "11.3.4.10", label: "11.3.4.10 pKa, pKb, pKw", topic: "Acids & Bases" },
  { value: "11.3.4.11", label: "11.3.4.11 pH Curves", topic: "Acids & Bases" },
  { value: "11.3.4.12", label: "11.3.4.12 Indicators", topic: "Acids & Bases" },
  { value: "11.3.4.13", label: "11.3.4.13 Titrations", topic: "Acids & Bases" },
  { value: "11.3.4.14", label: "11.3.4.14 Buffer Solutions (Qualitative)", topic: "Acids & Bases" },
  { value: "11.3.4.15", label: "11.3.4.15 Buffer pH Calculations", topic: "Acids & Bases" },
  { value: "11.3.4.16", label: "11.3.4.16 Uses of Buffers", topic: "Acids & Bases" },
];

const PRACTICE_TOPICS = [
  { value: "Energetics: Enthalpy & ΔH (11.3.1.1–11.3.1.2)", label: "Energetics: Enthalpy & ΔH", topic: "Energetics" },
  { value: "Energetics: Bond Enthalpies (11.3.1.3–11.3.1.5)", label: "Energetics: Bond Enthalpies", topic: "Energetics" },
  { value: "Energetics: Experimental Enthalpy (11.3.1.6)", label: "Energetics: Experimental Enthalpy", topic: "Energetics" },
  { value: "Energetics: Hess's Law (11.3.1.7)", label: "Energetics: Hess's Law", topic: "Energetics" },
  { value: "Kinetics: Maxwell-Boltzmann & Activation Energy (11.3.2.3)", label: "Kinetics: Maxwell-Boltzmann & Activation Energy", topic: "Kinetics" },
  { value: "Kinetics: Temperature & Concentration Effects (11.3.2.4)", label: "Kinetics: Temperature & Concentration Effects", topic: "Kinetics" },
  { value: "Kinetics: Rate Equations & Rate Constant (11.3.2.5–11.3.2.6)", label: "Kinetics: Rate Equations & Rate Constant", topic: "Kinetics" },
  { value: "Kinetics: Rate Calculations (11.3.2.7–11.3.2.8)", label: "Kinetics: Rate Calculations", topic: "Kinetics" },
  { value: "Equilibria: Dynamic Equilibrium (11.3.3.1)", label: "Equilibria: Dynamic Equilibrium", topic: "Equilibria" },
  { value: "Equilibria: Le Chatelier's Principle (11.3.3.2–11.3.3.3)", label: "Equilibria: Le Chatelier's Principle", topic: "Equilibria" },
  { value: "Equilibria: Industrial Equilibria — Haber & Contact Process (11.3.3.4–11.3.3.5)", label: "Equilibria: Industrial Equilibria (Haber & Contact)", topic: "Equilibria" },
  { value: "Equilibria: Kc Calculations (11.3.3.6–11.3.3.7)", label: "Equilibria: Kc Calculations", topic: "Equilibria" },
  { value: "Acids & Bases: Acid-Base Theories — Arrhenius & Brønsted-Lowry (11.3.4.1–11.3.4.2)", label: "Acids & Bases: Acid-Base Theories", topic: "Acids & Bases" },
  { value: "Acids & Bases: pH and Strong Acids (11.3.4.3–11.3.4.4)", label: "Acids & Bases: pH and Strong Acids", topic: "Acids & Bases" },
  { value: "Acids & Bases: Kw and Strong Bases (11.3.4.5–11.3.4.7)", label: "Acids & Bases: Kw and Strong Bases", topic: "Acids & Bases" },
  { value: "Acids & Bases: Weak Acids & Ka (11.3.4.8–11.3.4.10)", label: "Acids & Bases: Weak Acids & Ka", topic: "Acids & Bases" },
  { value: "Acids & Bases: pH Curves & Indicators (11.3.4.11–11.3.4.12)", label: "Acids & Bases: pH Curves & Indicators", topic: "Acids & Bases" },
  { value: "Acids & Bases: Titrations (11.3.4.13)", label: "Acids & Bases: Titrations", topic: "Acids & Bases" },
  { value: "Acids & Bases: Buffer Solutions (11.3.4.14–11.3.4.16)", label: "Acids & Bases: Buffer Solutions", topic: "Acids & Bases" },
];

const FLASHCARD_DATA = [
  // ── TERM CARDS ──
  { topic: "Energetics", front: "Enthalpy (H)", back: "The heat content of a system at constant pressure.\n\nExample: When methane burns, enthalpy decreases because heat is released to the surroundings — the products have lower enthalpy than the reactants." },
  { topic: "Energetics", front: "ΔH (Enthalpy Change)", back: "The difference in enthalpy between products and reactants: ΔH = H(products) − H(reactants).\n\nNegative ΔH = exothermic (heat released). Positive ΔH = endothermic (heat absorbed)." },
  { topic: "Energetics", front: "Standard Enthalpy", back: "Enthalpy change measured under standard conditions: 298 K (25°C), 100 kPa, all solutions at 1 mol dm⁻³. Denoted ΔH°.\n\nExample: ΔH°f of water = −286 kJ mol⁻¹" },
  { topic: "Energetics", front: "Exothermic Reaction", back: "A reaction that releases heat energy to the surroundings; ΔH is negative.\n\nExample: Combustion of propane: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O  ΔH = −2220 kJ mol⁻¹" },
  { topic: "Energetics", front: "Endothermic Reaction", back: "A reaction that absorbs heat energy from the surroundings; ΔH is positive.\n\nExample: Thermal decomposition of calcium carbonate: CaCO₃ → CaO + CO₂  ΔH = +178 kJ mol⁻¹" },
  { topic: "Energetics", front: "Bond Enthalpy", back: "The energy required to break one mole of a specific bond in a gaseous molecule under standard conditions.\n\nExample: C−H bond enthalpy ≈ +412 kJ mol⁻¹ (energy to break 1 mol of C−H bonds)" },
  { topic: "Energetics", front: "Mean Bond Enthalpy", back: "The average bond enthalpy for a given bond type, calculated across many different molecules. Used to estimate ΔH.\n\nΔH ≈ Σ(bonds broken) − Σ(bonds formed)" },
  { topic: "Energetics", front: "Hess's Law", back: "The total enthalpy change for a reaction is independent of the route taken, provided initial and final conditions are the same.\n\nUsed to calculate ΔH for reactions that cannot be measured directly." },
  { topic: "Kinetics", front: "Activation Energy (Eₐ)", back: "The minimum energy that colliding particles must possess for a reaction to occur.\n\nExample: Only molecules with KE ≥ Eₐ in the Maxwell-Boltzmann distribution will react upon collision." },
  { topic: "Kinetics", front: "Maxwell-Boltzmann Distribution", back: "A graph showing the distribution of molecular energies/speeds at a given temperature. The area under the curve beyond Eₐ represents the fraction of molecules that can react.\n\nIncreasing temperature shifts the peak right and increases the high-energy tail." },
  { topic: "Kinetics", front: "Rate of Reaction", back: "The change in concentration of a reactant or product per unit time.\n\nRate = Δ[concentration] / Δtime   Units: mol dm⁻³ s⁻¹" },
  { topic: "Kinetics", front: "Rate Equation", back: "An experimentally determined equation: rate = k[A]ᵐ[B]ⁿ\n\nWhere k is the rate constant, m and n are the orders with respect to A and B. Cannot be deduced from the equation stoichiometry alone." },
  { topic: "Kinetics", front: "Rate Constant (k)", back: "The proportionality constant in the rate equation. Its value depends on temperature (increases with temperature) and the presence of a catalyst.\n\nUnits of k depend on overall order of reaction." },
  { topic: "Kinetics", front: "Order of Reaction", back: "The power to which a concentration is raised in the rate equation, determined experimentally.\n\nZero order: rate independent of [A]\nFirst order: rate ∝ [A]\nSecond order: rate ∝ [A]²" },
  { topic: "Kinetics", front: "Zero / First / Second Order", back: "Zero: doubling [A] → no change in rate. Rate = k\nFirst: doubling [A] → doubles rate. Rate = k[A]\nSecond: doubling [A] → quadruples rate. Rate = k[A]²\n\nOverall order = sum of all individual orders." },
  { topic: "Equilibria", front: "Dynamic Equilibrium", back: "A state in a closed system where the forward and reverse reaction rates are equal, so concentrations of reactants and products remain constant (but not necessarily equal).\n\nExample: N₂ + 3H₂ ⇌ 2NH₃ in the Haber process." },
  { topic: "Equilibria", front: "Le Chatelier's Principle", back: "If a system at equilibrium is subjected to a change, the equilibrium will shift to oppose that change.\n\nExample: Increasing pressure on N₂ + 3H₂ ⇌ 2NH₃ shifts equilibrium right (fewer moles of gas)." },
  { topic: "Equilibria", front: "Kc (Equilibrium Constant)", back: "For aA + bB ⇌ cC + dD:\nKc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ\n\nKc only changes with temperature. A large Kc means equilibrium lies to the right (products favoured)." },
  { topic: "Equilibria", front: "Position of Equilibrium", back: "Describes whether the equilibrium mixture is richer in reactants or products.\n\nShifts right → more products formed\nShifts left → more reactants reformed\n\nAffected by: concentration, pressure (gases), temperature." },
  { topic: "Equilibria", front: "Catalyst (& Equilibrium)", back: "A catalyst increases the rate of both forward and reverse reactions equally, so it does NOT change the position of equilibrium or the value of Kc.\n\nIt allows equilibrium to be reached more quickly." },
  { topic: "Acids & Bases", front: "Arrhenius Acid", back: "A substance that produces H⁺ ions when dissolved in water.\n\nExample: HCl(aq) → H⁺(aq) + Cl⁻(aq)" },
  { topic: "Acids & Bases", front: "Arrhenius Base", back: "A substance that produces OH⁻ ions when dissolved in water.\n\nExample: NaOH(aq) → Na⁺(aq) + OH⁻(aq)" },
  { topic: "Acids & Bases", front: "Brønsted-Lowry Acid", back: "A proton (H⁺) donor.\n\nExample: CH₃COOH donates H⁺ to water:\nCH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺" },
  { topic: "Acids & Bases", front: "Brønsted-Lowry Base", back: "A proton (H⁺) acceptor.\n\nExample: NH₃ accepts H⁺ from water:\nNH₃ + H₂O ⇌ NH₄⁺ + OH⁻" },
  { topic: "Acids & Bases", front: "pH", back: "pH = −log₁₀[H⁺]\n\n[H⁺] = 10⁻ᵖᴴ\n\nAcidic: pH < 7, Neutral: pH = 7, Alkaline: pH > 7\nExample: [H⁺] = 0.01 mol dm⁻³ → pH = −log(0.01) = 2" },
  { topic: "Acids & Bases", front: "Strong Acid", back: "An acid that completely (fully) dissociates in aqueous solution.\n\nExample: HCl → H⁺ + Cl⁻  (100% dissociation)\nFor 0.1 mol dm⁻³ HCl: [H⁺] = 0.1 mol dm⁻³, pH = 1" },
  { topic: "Acids & Bases", front: "Strong Base", back: "A base that completely dissociates in aqueous solution.\n\nExample: NaOH → Na⁺ + OH⁻\nFor 0.1 mol dm⁻³ NaOH: [OH⁻] = 0.1, pOH = 1, pH = 13" },
  { topic: "Acids & Bases", front: "Weak Acid", back: "An acid that only partially dissociates in aqueous solution; equilibrium lies to the left.\n\nExample: CH₃COOH ⇌ CH₃COO⁻ + H⁺\nOnly ~1% dissociation in dilute ethanoic acid." },
  { topic: "Acids & Bases", front: "Weak Base", back: "A base that only partially dissociates in aqueous solution.\n\nExample: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\nEquilibrium lies to the left; [OH⁻] << [NH₃]initial." },
  { topic: "Acids & Bases", front: "Ka (Acid Dissociation Constant)", back: "For HA ⇌ H⁺ + A⁻:\nKa = [H⁺][A⁻] / [HA]\n\nLarger Ka = stronger acid. Ka only changes with temperature.\nExample: Ka(ethanoic acid) = 1.7 × 10⁻⁵ mol dm⁻³" },
  { topic: "Acids & Bases", front: "pKa", back: "pKa = −log₁₀(Ka)\n\nLower pKa = stronger acid.\nRelated by: pKw = pKa + pKb\n\nExample: Ka = 1.7 × 10⁻⁵ → pKa = −log(1.7 × 10⁻⁵) = 4.77" },
  { topic: "Acids & Bases", front: "pKb / pKw", back: "pKb = −log₁₀(Kb)  (base dissociation constant, p-scale)\npKw = −log₁₀(Kw) = 14 at 25°C\n\npKw = pKa + pKb\n\nKw = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25°C" },
  { topic: "Acids & Bases", front: "Kw (Ionic Product of Water)", back: "Water auto-ionises: H₂O ⇌ H⁺ + OH⁻\nKw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 25°C\n\nKw increases with temperature (endothermic process)." },
  { topic: "Acids & Bases", front: "Buffer Solution", back: "A solution that resists changes in pH when small amounts of acid or base are added.\n\nComposed of a weak acid and its conjugate base (acidic buffer), or a weak base and its conjugate acid (basic buffer)." },
  { topic: "Acids & Bases", front: "Acidic Buffer", back: "Made from a weak acid + its sodium salt (conjugate base).\n\nExample: CH₃COOH / CH₃COONa\nAdding H⁺: reacts with CH₃COO⁻ → CH₃COOH (resists pH drop)\nAdding OH⁻: reacts with CH₃COOH → CH₃COO⁻ + H₂O (resists pH rise)" },
  { topic: "Acids & Bases", front: "Basic Buffer", back: "Made from a weak base + its conjugate acid salt.\n\nExample: NH₃(aq) / NH₄Cl(aq)\nAdding H⁺: reacts with NH₃ → NH₄⁺\nAdding OH⁻: reacts with NH₄⁺ → NH₃ + H₂O" },
  { topic: "Acids & Bases", front: "Equivalence Point", back: "The point in a titration where moles of acid exactly equal moles of base (stoichiometrically).\n\nNote: equivalence point ≠ pH 7 unless it is a strong acid / strong base titration." },
  { topic: "Acids & Bases", front: "Half-Equivalence Point", back: "The point at which exactly half the acid has been neutralised.\n\nAt this point: [HA] = [A⁻], so pH = pKa.\nUseful for determining pKa from a titration curve." },
  { topic: "Acids & Bases", front: "Indicator", back: "A weak acid where the acid form (HIn) and conjugate base form (In⁻) have different colours. Endpoint occurs when [HIn] = [In⁻], i.e. pH ≈ pKa(indicator).\n\nExample: Phenolphthalein: colourless (pH<8.2) → pink (pH>10)" },
  // ── OBJECTIVE CARDS (representative selection from all 23) ──
  ...OBJECTIVES.map(obj => ({
    topic: obj.topic,
    front: `Objective ${obj.id}`,
    back: obj.text,
    isObjective: true,
  })),
];

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1b2a; color: #f5f0e8; font-family: 'Inter', sans-serif; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0d1b2a; }
  ::-webkit-scrollbar-thumb { background: #1e3a52; border-radius: 3px; }
  .flip-card { perspective: 1000px; }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.65s cubic-bezier(0.4,0,0.2,1);
    transform-style: preserve-3d;
  }
  .flip-card-inner.flipped { transform: rotateY(180deg); }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 16px;
  }
  .flip-card-back { transform: rotateY(180deg); }
  @keyframes spin { to { transform: rotate(360deg); } }
  .spinner {
    width: 36px; height: 36px;
    border: 3px solid #1e3a52;
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 40px auto;
  }
  @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
  .fade-in { animation: fadeIn 0.4s ease forwards; }
  select option[disabled] { color: #8ba3b8; font-style: italic; }
  .tab-btn { transition: all 0.2s ease; }
  .tab-btn:hover { opacity: 0.85; }
  @media (max-width: 640px) {
    .card-grid { grid-template-columns: 1fr !important; }
    .controls-row { flex-direction: column !important; }
  }
`;

// ─── UTILITY COMPONENTS ───────────────────────────────────────────────────────

function Spinner() {
  return <div className="spinner" />;
}

function ErrorBanner({ message, onDismiss }) {
  return (
    <div style={{
      background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.4)",
      borderRadius: 10, padding: "12px 16px", marginTop: 16, display: "flex",
      justifyContent: "space-between", alignItems: "flex-start", gap: 12,
    }}>
      <span style={{ color: "#fca5a5", fontSize: 14, lineHeight: 1.5 }}>⚠ {message}</span>
      {onDismiss && (
        <button onClick={onDismiss} style={{
          background: "none", border: "none", color: "#fca5a5", cursor: "pointer", fontSize: 18, lineHeight: 1, flexShrink: 0,
        }}>×</button>
      )}
    </div>
  );
}

// ─── API CALL ─────────────────────────────────────────────────────────────────

async function callAnthropicAPI({ systemPrompt, userMessage, onChunk, onDone, onError }) {
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": typeof window !== "undefined" && window.__ANTHROPIC_API_KEY__
          ? window.__ANTHROPIC_API_KEY__
          : (typeof process !== "undefined" && process.env && process.env.ANTHROPIC_API_KEY)
            ? process.env.ANTHROPIC_API_KEY
            : "",
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-calls": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
        stream: true,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      let errMsg = `API error ${res.status}`;
      try {
        const parsed = JSON.parse(errBody);
        errMsg = parsed?.error?.message || errMsg;
      } catch {}
      onError(errMsg);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.type === "content_block_delta" && parsed.delta?.text) {
              onChunk(parsed.delta.text);
            }
          } catch {}
        }
      }
    }
    onDone();
  } catch (err) {
    onError(err.message || "Network error. Please check your connection.");
  }
}

// ─── EXPLAIN TAB ──────────────────────────────────────────────────────────────

function ExplainTab() {
  const [selectedId, setSelectedId] = useState("11.3.1.1");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("Energetics");

  const handleExplain = useCallback(() => {
    const obj = OBJECTIVES.find(o => o.id === selectedId);
    if (!obj) return;
    setLoading(true);
    setResponse("");
    setError(null);
    setSelectedTopic(obj.topic);

    callAnthropicAPI({
      systemPrompt: `You are a patient, enthusiastic chemistry teacher explaining to a 10-year-old child. Use simple words, fun analogies, real-life examples, and short sentences. Never use jargon without immediately explaining it in the simplest possible terms. Structure your answer: 1) Hook — why this is cool or relevant to real life, 2) Core idea — a simple analogy, 3) The actual chemistry — explained simply step by step, 4) Quick summary in 2 sentences.`,
      userMessage: `Explain this learning objective to me like I am 10 years old: ${obj.text}`,
      onChunk: (text) => setResponse(prev => prev + text),
      onDone: () => setLoading(false),
      onError: (msg) => { setError(msg); setLoading(false); },
    });
  }, [selectedId]);

  const accentColor = TOPIC_COLORS[selectedTopic] || COLORS.kinetics;
  const selectedOption = EXPLAIN_TOPICS.find(t => t.value === selectedId);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ background: COLORS.surface, borderRadius: 16, padding: "28px 32px", border: `1px solid ${COLORS.border}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 6, color: COLORS.text }}>
          Explain It Simply
        </h2>
        <p style={{ color: COLORS.muted, fontSize: 14, marginBottom: 24 }}>
          Select a learning objective and get it explained like you're 10 years old.
        </p>

        <div className="controls-row" style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <label style={{ display: "block", fontSize: 12, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Learning Objective
            </label>
            <select
              value={selectedId}
              onChange={e => {
                setSelectedId(e.target.value);
                const opt = EXPLAIN_TOPICS.find(t => t.value === e.target.value);
                if (opt?.topic) setSelectedTopic(opt.topic);
              }}
              style={{
                width: "100%", background: "#0d1b2a", border: `1px solid ${COLORS.border}`,
                borderRadius: 8, color: COLORS.text, padding: "10px 14px", fontSize: 14, cursor: "pointer",
                outline: "none", appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%238ba3b8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
              }}
            >
              {EXPLAIN_TOPICS.map((opt, i) =>
                opt.disabled
                  ? <option key={i} disabled style={{ color: COLORS.muted, fontStyle: "italic" }}>{opt.group}</option>
                  : <option key={opt.value} value={opt.value}>{opt.label}</option>
              )}
            </select>
          </div>

          <button
            onClick={handleExplain}
            disabled={loading}
            style={{
              background: loading ? COLORS.border : accentColor,
              color: loading ? COLORS.muted : "#0d1b2a",
              border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 14,
              fontWeight: 600, cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s ease", whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            {loading ? "Explaining..." : "✦ Explain to me"}
          </button>
        </div>

        {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}
      </div>

      {(loading || response) && (
        <div className="fade-in" style={{
          background: COLORS.surface, borderRadius: 16, padding: "28px 32px",
          border: `1px solid ${accentColor}40`, marginTop: 20,
          borderLeft: `4px solid ${accentColor}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{
              background: `${accentColor}20`, border: `1px solid ${accentColor}60`,
              borderRadius: 20, padding: "3px 12px", fontSize: 12, color: accentColor, fontWeight: 600,
            }}>
              {selectedTopic}
            </div>
            <span style={{ color: COLORS.muted, fontSize: 13 }}>{selectedOption?.label}</span>
          </div>

          {loading && !response && <Spinner />}

          {response && (
            <div style={{
              color: COLORS.text, lineHeight: 1.8, fontSize: 15,
              whiteSpace: "pre-wrap", fontFamily: "'Inter', sans-serif",
            }}>
              {response}
              {loading && <span style={{ opacity: 0.5, animation: "spin 1s linear infinite", display: "inline-block" }}>▋</span>}
            </div>
          )}
        </div>
      )}

      {!loading && !response && !error && (
        <div style={{
          textAlign: "center", padding: "60px 20px", color: COLORS.muted, fontSize: 15,
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🧪</div>
          <p>Select an objective above and click <strong style={{ color: COLORS.text }}>Explain to me</strong> to get started.</p>
        </div>
      )}
    </div>
  );
}

// ─── FLASHCARDS TAB ───────────────────────────────────────────────────────────

function FlashcardsTab() {
  const [deck, setDeck] = useState(FLASHCARD_DATA);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filterTopic, setFilterTopic] = useState("All");

  const filteredDeck = filterTopic === "All"
    ? deck
    : deck.filter(c => c.topic === filterTopic);

  const safeIndex = Math.min(index, Math.max(0, filteredDeck.length - 1));
  const card = filteredDeck[safeIndex];
  const progress = filteredDeck.length > 0 ? safeIndex + 1 : 0;
  const accentColor = card ? (TOPIC_COLORS[card.topic] || COLORS.kinetics) : COLORS.kinetics;

  const shuffle = () => {
    setDeck(prev => {
      const filtered = filterTopic === "All" ? [...prev] : prev.filter(c => c.topic === filterTopic);
      const others = filterTopic === "All" ? [] : prev.filter(c => c.topic !== filterTopic);
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
      return filterTopic === "All" ? filtered : [...others, ...filtered];
    });
    setIndex(0);
    setFlipped(false);
  };

  const go = (dir) => {
    setFlipped(false);
    setTimeout(() => {
      setIndex(i => {
        const next = i + dir;
        if (next < 0) return filteredDeck.length - 1;
        if (next >= filteredDeck.length) return 0;
        return next;
      });
    }, 80);
  };

  useEffect(() => { setFlipped(false); setIndex(0); }, [filterTopic]);

  const topics = ["All", "Energetics", "Kinetics", "Equilibria", "Acids & Bases"];

  return (
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
        {topics.map(t => {
          const active = filterTopic === t;
          const color = t === "All" ? "#8ba3b8" : TOPIC_COLORS[t];
          return (
            <button
              key={t}
              onClick={() => setFilterTopic(t)}
              style={{
                background: active ? `${color}20` : "transparent",
                border: `1px solid ${active ? color : COLORS.border}`,
                borderRadius: 20, padding: "5px 14px", fontSize: 13,
                color: active ? color : COLORS.muted,
                cursor: "pointer", fontWeight: active ? 600 : 400,
                transition: "all 0.2s ease",
              }}
            >
              {t}
            </button>
          );
        })}
        <button
          onClick={shuffle}
          style={{
            marginLeft: "auto", background: "transparent", border: `1px solid ${COLORS.border}`,
            borderRadius: 20, padding: "5px 14px", fontSize: 13, color: COLORS.muted,
            cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
          }}
        >
          ⇄ Shuffle
        </button>
      </div>

      {/* Progress */}
      {filteredDeck.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 4, background: COLORS.border, borderRadius: 2, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${(progress / filteredDeck.length) * 100}%`,
              background: accentColor, borderRadius: 2, transition: "width 0.3s ease",
            }} />
          </div>
          <span style={{ color: COLORS.muted, fontSize: 13, whiteSpace: "nowrap" }}>
            {progress} / {filteredDeck.length}
          </span>
        </div>
      )}

      {/* Card */}
      {card ? (
        <>
          <div
            className="flip-card"
            onClick={() => setFlipped(f => !f)}
            style={{ width: "100%", height: 340, cursor: "pointer", userSelect: "none" }}
          >
            <div className={`flip-card-inner${flipped ? " flipped" : ""}`}>
              {/* Front */}
              <div
                className="flip-card-front"
                style={{
                  background: COLORS.surface,
                  border: `2px solid ${accentColor}`,
                  display: "flex", flexDirection: "column",
                  justifyContent: "center", alignItems: "center", padding: 32,
                }}
              >
                <div style={{
                  background: `${accentColor}20`, border: `1px solid ${accentColor}50`,
                  borderRadius: 20, padding: "4px 14px", fontSize: 12,
                  color: accentColor, fontWeight: 600, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  {card.isObjective ? "Objective" : "Term"} · {card.topic}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 26,
                  color: COLORS.text, textAlign: "center", lineHeight: 1.3,
                }}>
                  {card.front}
                </h3>
                <p style={{ color: COLORS.muted, fontSize: 13, marginTop: 24 }}>
                  Click to reveal
                </p>
              </div>

              {/* Back */}
              <div
                className="flip-card-back"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.surface}, #162b42)`,
                  border: `2px solid ${accentColor}80`,
                  display: "flex", flexDirection: "column",
                  justifyContent: "center", padding: 32, overflowY: "auto",
                }}
              >
                <div style={{
                  background: `${accentColor}20`, border: `1px solid ${accentColor}50`,
                  borderRadius: 20, padding: "4px 14px", fontSize: 12,
                  color: accentColor, fontWeight: 600, marginBottom: 16, alignSelf: "flex-start",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  {card.front}
                </div>
                <p style={{
                  color: COLORS.text, fontSize: 15, lineHeight: 1.75,
                  whiteSpace: "pre-wrap", fontFamily: "'Inter', sans-serif",
                }}>
                  {card.back}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24 }}>
            <button
              onClick={() => go(-1)}
              style={{
                background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                borderRadius: 10, padding: "10px 28px", color: COLORS.text,
                fontSize: 18, cursor: "pointer", fontWeight: 600,
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.target.style.borderColor = accentColor}
              onMouseLeave={e => e.target.style.borderColor = COLORS.border}
            >
              ← Prev
            </button>
            <button
              onClick={() => setFlipped(f => !f)}
              style={{
                background: `${accentColor}15`, border: `1px solid ${accentColor}60`,
                borderRadius: 10, padding: "10px 24px", color: accentColor,
                fontSize: 14, cursor: "pointer", fontWeight: 600,
              }}
            >
              {flipped ? "Hide" : "Reveal"}
            </button>
            <button
              onClick={() => go(1)}
              style={{
                background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                borderRadius: 10, padding: "10px 28px", color: COLORS.text,
                fontSize: 18, cursor: "pointer", fontWeight: 600,
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.target.style.borderColor = accentColor}
              onMouseLeave={e => e.target.style.borderColor = COLORS.border}
            >
              Next →
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: COLORS.muted }}>
          No cards found for this filter.
        </div>
      )}

      <p style={{ textAlign: "center", color: COLORS.muted, fontSize: 13, marginTop: 20 }}>
        {filteredDeck.length} cards total · Click card to flip
      </p>
    </div>
  );
}

// ─── PRACTICE QUESTIONS TAB ───────────────────────────────────────────────────

function PracticeTab() {
  const [selectedTopic, setSelectedTopic] = useState(PRACTICE_TOPICS[0].value);
  const [difficulty, setDifficulty] = useState("AS Level");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showScheme, setShowScheme] = useState(false);
  const [topicColor, setTopicColor] = useState(COLORS.energetics);

  const parseResponse = (text) => {
    const qMatch = text.match(/QUESTION:\s*([\s\S]*?)(?=MARK SCHEME:|$)/i);
    const msMatch = text.match(/MARK SCHEME:\s*([\s\S]*?)$/i);
    return {
      question: qMatch ? qMatch[1].trim() : text,
      markScheme: msMatch ? msMatch[1].trim() : null,
    };
  };

  const { question, markScheme } = parseResponse(response);

  const handleGenerate = useCallback(() => {
    setLoading(true);
    setResponse("");
    setError(null);
    setShowScheme(false);

    const topicObj = PRACTICE_TOPICS.find(t => t.value === selectedTopic);
    setTopicColor(TOPIC_COLORS[topicObj?.topic] || COLORS.kinetics);

    callAnthropicAPI({
      systemPrompt: `You are an experienced A-Level Chemistry examiner writing questions in the style of Cambridge or AQA. Generate one authentic exam-style question appropriate for the selected difficulty. For calculation questions always show full step-by-step mark scheme working with units and significant figures. For theory questions give a detailed mark scheme with marking points.`,
      userMessage: `Generate a ${difficulty} A-Level Chemistry question on the following topic: ${selectedTopic}. After the question, provide a full mark scheme. Format exactly as:\nQUESTION: ...\nMARK SCHEME: ...`,
      onChunk: (text) => setResponse(prev => prev + text),
      onDone: () => setLoading(false),
      onError: (msg) => { setError(msg); setLoading(false); },
    });
  }, [selectedTopic, difficulty]);

  const difficultyColors = {
    "AS Level": "#38bdf8",
    "A2 Level": "#a78bfa",
    "Challenge/Stretch": "#f59e0b",
  };
  const diffColor = difficultyColors[difficulty] || COLORS.kinetics;

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ background: COLORS.surface, borderRadius: 16, padding: "28px 32px", border: `1px solid ${COLORS.border}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 6, color: COLORS.text }}>
          Practice Questions
        </h2>
        <p style={{ color: COLORS.muted, fontSize: 14, marginBottom: 24 }}>
          Generate authentic A-Level exam-style questions with full mark schemes.
        </p>

        <div className="controls-row" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          <div style={{ flex: 2, minWidth: 220 }}>
            <label style={{ display: "block", fontSize: 12, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Topic
            </label>
            <select
              value={selectedTopic}
              onChange={e => setSelectedTopic(e.target.value)}
              style={{
                width: "100%", background: "#0d1b2a", border: `1px solid ${COLORS.border}`,
                borderRadius: 8, color: COLORS.text, padding: "10px 14px", fontSize: 14,
                cursor: "pointer", outline: "none", appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%238ba3b8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
              }}
            >
              {PRACTICE_TOPICS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={{ display: "block", fontSize: 12, color: COLORS.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              style={{
                width: "100%", background: "#0d1b2a", border: `1px solid ${COLORS.border}`,
                borderRadius: 8, color: COLORS.text, padding: "10px 14px", fontSize: 14,
                cursor: "pointer", outline: "none", appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%238ba3b8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
              }}
            >
              <option>AS Level</option>
              <option>A2 Level</option>
              <option>Challenge/Stretch</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            background: loading ? COLORS.border : topicColor,
            color: loading ? COLORS.muted : "#0d1b2a",
            border: "none", borderRadius: 8, padding: "11px 28px",
            fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.2s ease",
          }}
        >
          {loading ? "Generating..." : "✦ Generate Question"}
        </button>

        {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}
      </div>

      {(loading || response) && (
        <div className="fade-in" style={{ marginTop: 20 }}>
          {/* Question card */}
          <div style={{
            background: COLORS.surface, borderRadius: 16, padding: "28px 32px",
            border: `1px solid ${topicColor}40`, borderLeft: `4px solid ${topicColor}`,
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{
                background: `${topicColor}20`, border: `1px solid ${topicColor}60`,
                borderRadius: 20, padding: "3px 12px", fontSize: 12, color: topicColor, fontWeight: 600,
              }}>
                {PRACTICE_TOPICS.find(t => t.value === selectedTopic)?.topic}
              </span>
              <span style={{
                background: `${diffColor}15`, border: `1px solid ${diffColor}50`,
                borderRadius: 20, padding: "3px 12px", fontSize: 12, color: diffColor, fontWeight: 600,
              }}>
                {difficulty}
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 16, color: COLORS.muted,
              marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              Question
            </h3>

            {loading && !question && <Spinner />}

            {question && (
              <div style={{
                color: COLORS.text, lineHeight: 1.8, fontSize: 15,
                whiteSpace: "pre-wrap", fontFamily: "'Inter', sans-serif",
              }}>
                {question}
                {loading && !markScheme && <span style={{ opacity: 0.5 }}>▋</span>}
              </div>
            )}
          </div>

          {/* Mark scheme */}
          {(markScheme || (loading && question)) && (
            <div style={{
              background: COLORS.surface, borderRadius: 16,
              border: `1px solid ${COLORS.border}`, marginTop: 12, overflow: "hidden",
            }}>
              <button
                onClick={() => setShowScheme(s => !s)}
                disabled={!markScheme}
                style={{
                  width: "100%", background: "transparent",
                  border: "none", borderBottom: showScheme ? `1px solid ${COLORS.border}` : "none",
                  padding: "16px 32px", color: markScheme ? COLORS.text : COLORS.muted,
                  fontSize: 14, fontWeight: 600, cursor: markScheme ? "pointer" : "default",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  textAlign: "left",
                }}
              >
                <span>📋 Mark Scheme</span>
                {markScheme && (
                  <span style={{ color: COLORS.muted, fontSize: 18 }}>
                    {showScheme ? "▲" : "▼"}
                  </span>
                )}
                {loading && !markScheme && <span style={{ color: COLORS.muted, fontSize: 12 }}>generating...</span>}
              </button>

              {showScheme && markScheme && (
                <div style={{ padding: "24px 32px" }}>
                  <div style={{
                    color: COLORS.text, lineHeight: 1.8, fontSize: 14,
                    whiteSpace: "pre-wrap", fontFamily: "'Inter', sans-serif",
                  }}>
                    {markScheme}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {!loading && !response && !error && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: COLORS.muted }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
          <p>Select a topic and difficulty, then click <strong style={{ color: COLORS.text }}>Generate Question</strong>.</p>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState("explain");

  const tabs = [
    { id: "explain", label: "✦ Explain", subtitle: "child-friendly" },
    { id: "flashcards", label: "⊞ Flashcards", subtitle: `${FLASHCARD_DATA.length} cards` },
    { id: "practice", label: "✎ Practice", subtitle: "exam questions" },
  ];

  const tabColors = { explain: COLORS.kinetics, flashcards: COLORS.equilibria, practice: COLORS.acids };

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ minHeight: "100vh", background: COLORS.bg, padding: "0 0 60px" }}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(180deg, #0a1628 0%, ${COLORS.bg} 100%)`,
          borderBottom: `1px solid ${COLORS.border}`, padding: "32px 24px 0",
          textAlign: "center", marginBottom: 32,
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
              borderRadius: 20, padding: "4px 14px", marginBottom: 14,
            }}>
              <span style={{ color: COLORS.kinetics, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}>
                A-LEVEL CHEMISTRY · OCR / AQA · 11.3
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              color: COLORS.text, marginBottom: 8, letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}>
              Chemistry Study Lab
            </h1>
            <p style={{ color: COLORS.muted, fontSize: 15, marginBottom: 28 }}>
              Energetics · Kinetics · Equilibria · Acids & Bases
            </p>

            {/* Tabs */}
            <div style={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
              {tabs.map(tab => {
                const active = activeTab === tab.id;
                const color = tabColors[tab.id];
                return (
                  <button
                    key={tab.id}
                    className="tab-btn"
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: active ? `${color}18` : "transparent",
                      border: `1px solid ${active ? color : "transparent"}`,
                      borderBottom: active ? `3px solid ${color}` : "3px solid transparent",
                      borderRadius: "8px 8px 0 0",
                      padding: "12px 28px", cursor: "pointer",
                      color: active ? color : COLORS.muted,
                      fontWeight: active ? 700 : 400, fontSize: 14,
                      transition: "all 0.2s ease",
                      minWidth: 120,
                    }}
                  >
                    <div>{tab.label}</div>
                    <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{tab.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ padding: "0 24px", maxWidth: 900, margin: "0 auto" }}>
          {activeTab === "explain" && <ExplainTab />}
          {activeTab === "flashcards" && <FlashcardsTab />}
          {activeTab === "practice" && <PracticeTab />}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: 60, color: COLORS.muted, fontSize: 12,
          borderTop: `1px solid ${COLORS.border}`, paddingTop: 24, maxWidth: 900, margin: "60px auto 0",
        }}>
          <p>Chemistry Study Lab · A-Level Energetics, Kinetics, Equilibria & Acids/Bases</p>
          <p style={{ marginTop: 4, opacity: 0.6 }}>Powered by Claude · For educational use</p>
        </div>
      </div>
    </>
  );
}
