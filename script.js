/*!
 * MathFormulaGame - Ghanaian Mathematics Formulas & Game
 * A fully responsive mathematics cheatsheet website with game mechanics
 * for JHS (Forms 1-3) and SHS (Forms 1-3) students in Ghana
 * 
 * Author: MathFormulaGame Team
 * License: MIT
 * Version: 1.0.0
 * 
 * To add more formulas:
 * 1. Add formula object to the formulas array following the structure
 * 2. Each formula must have: id, title, level, topic, description, formula (LaTeX), example, solution
 * 
 * To add more game questions:
 * 1. Add question object to the questions array
 * 2. Types: 'match' (choose formula), 'fill' (fill in blank), 'calc' (calculate)
 */

(function() {
    'use strict';

    // ========================================================================
    // FORMULA DATABASE - 35+ formulas for JHS and SHS
    // ========================================================================
    const formulas = [
        // ===================== JHS FORMULAS =====================
        // Basic Arithmetic
        {
            id: 'jhsm1',
            title: 'Commutative Property of Addition',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            description: 'The order of addends does not change the sum',
            formula: 'a + b = b + a',
            example: '\\text{If } a = 25 \\text{ and } b = 15, \\text{ then } a + b = b + a',
            solution: '40'
        },
        {
            id: 'jhsm2',
            title: 'Commutative Property of Multiplication',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            description: 'The order of factors does not change the product',
            formula: 'a \\times b = b \\times a',
            example: '\\text{If } a = 8 \\text{ and } b = 12, \\text{ then } a \\times b = b \\times a',
            solution: '96'
        },
        {
            id: 'jhsm3',
            title: 'Associative Property of Addition',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            description: 'Grouping of addends does not change the sum',
            formula: '(a + b) + c = a + (b + c)',
            example: '(5 + 3) + 7 = 5 + (3 + 7)',
            solution: '15'
        },
        // Fractions
        {
            id: 'jhsf1',
            title: 'Adding Fractions - Same Denominator',
            level: 'jhs',
            topic: 'Fractions',
            description: 'Add numerators when denominators are equal',
            formula: '\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}',
            example: '\\frac{3}{8} + \\frac{2}{8} = ?',
            solution: '\\frac{5}{8}'
        },
        {
            id: 'jhsf2',
            title: 'Multiplying Fractions',
            level: 'jhs',
            topic: 'Fractions',
            description: 'Multiply numerators together and denominators together',
            formula: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
            example: '\\frac{3}{4} \\times \\frac{2}{5} = ?',
            solution: '\\frac{6}{20} = \\frac{3}{10}'
        },
        {
            id: 'jhsf3',
            title: 'Dividing Fractions',
            level: 'jhs',
            topic: 'Fractions',
            description: 'Multiply by the reciprocal of the divisor',
            formula: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
            example: '\\frac{3}{4} \\div \\frac{1}{2} = ?',
            solution: '\\frac{3}{2} = 1\\frac{1}{2}'
        },
        // Percentages
{
            id: 'jhsp1',
            title: 'Percentage Formula',
            level: 'jhs',
            topic: 'Percentages',
            description: 'Calculate percentage of a value',
            formula: '\\text{Percentage} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100',
            example: '\\text{What is } 25\\% \\text{ of } \\text{GHS } 400?',
            solution: '\\text{GHS } 100'
        },
        {
            id: 'jhsp2',
            title: 'Finding Percentage of a Number',
            level: 'jhs',
            topic: 'Percentages',
            description: 'Multiply the number by the percentage (as decimal)',
            formula: 'x \\% \\text{ of } n = \\frac{x}{100} \\times n',
            example: '15\\% \\text{ of } \\text{GHS } 250',
            solution: '\\text{GHS } 37.50'
        },
        {
            id: 'jhsp3',
            title: 'Percentage Increase',
            level: 'jhs',
            topic: 'Percentages',
            description: 'Calculate new value after percentage increase',
            formula: '\\text{New Value} = n + \\frac{p}{100} \\times n',
            example: '\\text{Price of GHS } 200 \\text{ increased by } 10\\%',
            solution: '\\text{GHS } 220'
        },
        // Ratios
        {
            id: 'jhsr1',
            title: 'Ratio Formula',
            level: 'jhs',
            topic: 'Ratios',
            description: 'Express ratio between two quantities',
            formula: 'a:b = \\frac{a}{b}',
            example: '\\text{Divide GHS } 420 \\text{ in ratio } 2:1',
            solution: '\\text{GHS } 280 : \\text{GHS } 140'
        },
        {
            id: 'jhsr2',
            title: 'Sharing in a Given Ratio',
            level: 'jhs',
            topic: 'Ratios',
            description: 'Share amount according to ratio',
            formula: '\\text{Share}_a = \\frac{a}{a+b} \\times \\text{Total}',
            example: '\\text{Share GHS } 600 \\text{ in ratio } 3:2:1',
            solution: '\\text{GHS } 300, \\text{GHS } 200, \\text{GHS } 100'
        },
        // Simple Equations
        {
            id: 'jhse1',
            title: 'Linear Equation Solution',
            level: 'jhs',
            topic: 'Simple Equations',
            description: 'Solve for x in linear equations',
            formula: 'ax + b = c \\Rightarrow x = \\frac{c-b}{a}',
            example: '3x + 5 = 20, \\text{ find } x',
            solution: 'x = 5'
        },
        {
            id: 'jhse2',
            title: 'Simple Interest Formula',
            level: 'jhs',
            topic: 'Simple Equations',
            description: 'Calculate simple interest',
            formula: 'I = \\frac{P \\times R \\times T}{100}',
            example: '\\text{Simple interest on GHS } 500 \\text{ at } 10\\% \\text{ for } 2 \\text{ years}',
            solution: '\\text{GHS } 100'
        },
        // Area & Perimeter
        {
            id: 'jhsap1',
            title: 'Area of Rectangle',
            level: 'jhs',
            topic: 'Area/Perimeter',
            description: 'Area = length × width',
            formula: 'A = l \\times w',
            example: '\\text{Rectangle: } l = 12\\text{m}, w = 5\\text{m}',
            solution: '60 \\text{ m}^2'
        },
        {
            id: 'jhsap2',
            title: 'Perimeter of Rectangle',
            level: 'jhs',
            topic: 'Area/Perimeter',
            description: 'Perimeter = 2 × (length + width)',
            formula: 'P = 2(l + w)',
            example: '\\text{Rectangle: } l = 8\\text{m}, w = 3\\text{m}',
            solution: '22 \\text{ m}'
        },
        {
            id: 'jhsap3',
            title: 'Area of Triangle',
            level: 'jhs',
            topic: 'Area/Perimeter',
            description: 'Area = 1/2 × base × height',
            formula: 'A = \\frac{1}{2} \\times b \\times h',
            example: '\\text{Triangle: } b = 6\\text{m}, h = 8\\text{m}',
            solution: '24 \\text{ m}^2'
        },
        {
            id: 'jhsap4',
            title: 'Area of Circle',
            level: 'jhs',
            topic: 'Area/Perimeter',
            description: 'Area = π × radius²',
            formula: 'A = \\pi r^2',
            example: '\\text{Circle: } r = 7\\text{m}, \\pi = \\frac{22}{7}',
            solution: '154 \\text{ m}^2'
        },
        {
            id: 'jhsap5',
            title: 'Circumference of Circle',
            level: 'jhs',
            topic: 'Area/Perimeter',
            description: 'Circumference = 2πr or πd',
            formula: 'C = 2\\pi r = \\pi d',
            example: '\\text{Circle: } r = 14\\text{m}, \\pi = \\frac{22}{7}',
            solution: '88 \\text{ m}'
        },
        // Statistics (Mean/Mode/Median)
        {
            id: 'jhss1',
            title: 'Arithmetic Mean',
            level: 'jhs',
            topic: 'Statistics',
            description: 'Mean = sum of values / number of values',
            formula: '\\bar{x} = \\frac{\\sum x_i}{n}',
            example: '\\text{Find mean of } 12, 15, 18, 21, 24',
            solution: '18'
        },
        {
            id: 'jhss2',
            title: 'Mode',
            level: 'jhs',
            topic: 'Statistics',
            description: 'The value occurring most frequently',
            formula: '\\text{Mode} = \\text{most frequent value}',
            example: '\\text{Find mode of } 3, 5, 5, 7, 8, 5, 3',
            solution: '5'
        },
        {
            id: 'jhss3',
            title: 'Median',
            level: 'jhs',
            topic: 'Statistics',
            description: 'The middle value when arranged in order',
            formula: '\\text{Median} = \\text{middle value}',
            example: '\\text{Find median of } 4, 7, 2, 9, 5',
            solution: '5'
        },
        // Introduction to Algebra
        {
            id: 'jhsa1',
            title: 'Laws of Indices (Multiplication)',
            level: 'jhs',
            topic: 'Introduction to Algebra',
            description: 'When multiplying same base, add exponents',
            formula: 'a^m \\times a^n = a^{m+n}',
            example: 'x^3 \\times x^4',
            solution: 'x^7'
        },
        {
            id: 'jhsa2',
            title: 'Laws of Indices (Division)',
            level: 'jhs',
            topic: 'Introduction to Algebra',
            description: 'When dividing same base, subtract exponents',
            formula: '\\frac{a^m}{a^n} = a^{m-n}',
            example: 'x^5 \\div x^2',
            solution: 'x^3'
        },
        // ===================== SHS FORMULAS =====================
        // Quadratic Equations
        {
            id: 'shsq1',
            title: 'Quadratic Formula',
            level: 'shs',
            topic: 'Quadratic Equations',
            description: 'Solve any quadratic equation',
            formula: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}',
            example: '\\text{Solve } x^2 - 5x + 6 = 0',
            solution: 'x = 2 \\text{ or } x = 3'
        },
        {
            id: 'shsq2',
            title: 'Difference of Squares',
            level: 'shs',
            topic: 'Quadratic Equations',
            description: 'Factor a² - b² = (a+b)(a-b)',
            formula: 'a^2 - b^2 = (a+b)(a-b)',
            example: '\\text{Factor } x^2 - 25',
            solution: '(x+5)(x-5)'
        },
        {
            id: 'shsq3',
            title: 'Perfect Square Trinomial',
            level: 'shs',
            topic: 'Quadratic Equations',
            description: 'a² + 2ab + b² = (a + b)²',
            formula: '(a+b)^2 = a^2 + 2ab + b^2',
            example: '\\text{Expand } (x+3)^2',
            solution: 'x^2 + 6x + 9'
        },
        // Trigonometry
{
            id: 'shst1',
            title: 'Sine Rule',
            level: 'shs',
            topic: 'Trigonometry',
            description: 'Relates sides and angles in any triangle',
            formula: '\\frac{a}{\\sin A} = \\frac{b}{\sin B} = \\frac{c}{\sin C}',
            example: '\\text{In } \\triangle ABC, \\text{ } a = 8, \\angle A = 30^\\circ, \\text{ find angle opposite } b = 16',
            solution: '\\angle B = 90^\\circ'
        },
        {
            id: 'shst2',
            title: 'Cosine Rule',
            level: 'shs',
            topic: 'Trigonometry',
            description: 'Relates all three sides to one angle',
            formula: 'c^2 = a^2 + b^2 - 2ab\\cos C',
            example: '\\text{Find } c \\text{ when } a = 5, b = 6, \\angle C = 60^\\circ',
            solution: 'c = \\sqrt{31} \\approx 5.57'
        },
        {
            id: 'shst3',
            title: 'Basic Trigonometric Identity',
            level: 'shs',
            topic: 'Trigonometry',
            description: 'Pythagorean identity for sine and cosine',
            formula: '\\sin^2\\theta + \\cos^2\\theta = 1',
            example: '\\text{If } \\sin \\theta = 0.6, \\text{ find } \\cos \\theta',
            solution: '\\cos \\theta = 0.8'
        },
        {
            id: 'shst4',
            title: 'Tangent Definition',
            level: 'shs',
            topic: 'Trigonometry',
            description: 'Tangent = opposite / adjacent',
            formula: '\\tan\\theta = \\frac{\sin\\theta}{\cos\\theta}',
            example: '\\text{If } \\sin \\theta = \\frac{3}{5}, \\text{ find } \\tan \\theta',
            solution: '\\frac{3}{4}'
},
        // ===================== SHS FORMULAS =====================
        // Sets and Venn Diagrams
        {
            id: 'shsset1',
            title: 'Union of Sets',
            level: 'shs',
            topic: 'Sets & Venn Diagrams',
            description: 'Elements in either set A or B or both',
            formula: 'n(A \\cup B) = n(A) + n(B) - n(A \\cap B)',
            example: 'n(A) = 12, n(B) = 15, n(A \\cap B) = 5',
            solution: 'n(A \\cup B) = 22'
        },
        {
            id: 'shsset2',
            title: 'Complement of a Set',
            level: 'shs',
            topic: 'Sets & Venn Diagrams',
            description: 'Elements in universal set but not in the set',
            formula: 'A\' = U - A',
            example: 'U = \\{1,2,3,4,5\\}, A = \\{2,4\\}',
            solution: 'A\' = \\{1,3,5\\}'
        },
        // Indices and Logarithms
        {
            id: 'shsi1',
            title: 'Logarithm Definition',
            level: 'shs',
            topic: 'Indices & Logarithms',
            description: 'If y = aˣ, then logₐ(y) = x',
            formula: '\\log_a y = x \\iff a^x = y',
            example: '\\log_2 8',
            solution: '3'
        },
        {
            id: 'shsi2',
            title: 'Product Rule of Logarithms',
            level: 'shs',
            topic: 'Indices & Logarithms',
            description: 'Log of product = sum of logs',
            formula: '\\log_a(xy) = \\log_a x + \\log_a y',
            example: '\\log(100) = \\log(10 \\times 10)',
            solution: '2'
        },
        {
            id: 'shsi3',
            title: 'Change of Base Formula',
            level: 'shs',
            topic: 'Indices & Logarithms',
            description: 'Convert log from base a to base b',
            formula: '\\log_a x = \\frac{\\log_b x}{\\log_b a}',
            example: '\\log_2 5',
            solution: '\\approx 2.32'
},
        // ===================== SHS FORMULAS =====================
        // Coordinate Geometry
        {
            id: 'shscg1',
            title: 'Distance Formula',
            level: 'shs',
            topic: 'Coordinate Geometry',
            description: 'Distance between two points',
            formula: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}',
            example: '\\text{Distance from } (3,4) \\text{ to } (7,1)',
            solution: '5'
        },
        {
            id: 'shscg2',
            title: 'Midpoint Formula',
            level: 'shs',
            topic: 'Coordinate Geometry',
            description: 'Find midpoint of two points',
            formula: 'M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)',
            example: '\\text{Midpoint of } (2,4) \\text{ and } (6,8)',
            solution: '(4, 6)'
        },
        {
            id: 'shscg3',
            title: 'Equation of a Line',
            level: 'shs',
            topic: 'Coordinate Geometry',
            description: 'Straight line equation',
            formula: 'y = mx + c',
            example: '\\text{Line with slope } 2 \\text{ passing through } (0,3)',
            solution: 'y = 2x + 3'
        },
        // Statistics (Grouped Data)
        {
            id: 'shsst1',
            title: 'Standard Deviation',
            level: 'shs',
            topic: 'Statistics',
            description: 'Measure of spread in grouped data',
            formula: '\\sigma = \\sqrt{\\frac{\\sum f_i(x_i - \\bar{x})^2}{\\sum f_i}}',
            example: '\\text{Find SD of } 2, 4, 4, 4, 5, 5, 7, 9',
            solution: '\\approx 2'
        },
        // Probability
        {
            id: 'shspr1',
            title: 'Probability Formula',
            level: 'shs',
            topic: 'Probability',
            description: 'Probability of an event',
            formula: 'P(A) = \\frac{n(A)}{n(S)}',
            example: 'P(\\text{drawing red card})',
            solution: '\\frac{26}{52} = \\frac{1}{2}'
        },
        {
            id: 'shspr2',
            title: 'Addition Rule of Probability',
            level: 'shs',
            topic: 'Probability',
            description: 'Probability of A or B',
            formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
            example: 'P(\\text{king OR heart})',
            solution: '\\frac{16}{52}'
        },
        // Calculus (Differentiation)
        {
            id: 'shsc1',
            title: 'Power Rule of Differentiation',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            description: 'Differentiate xⁿ',
            formula: '\\frac{d}{dx}x^n = nx^{n-1}',
            example: '\\frac{d}{dx}x^5',
            solution: '5x^4'
        },
        {
            id: 'shsc2',
            title: 'Constant Multiple Rule',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            description: 'Bring constant outside differentiation',
            formula: '\\frac{d}{dx}(cf(x)) = c \\cdot f\'(x)',
            example: '\\frac{d}{dx}(3x^4)',
            solution: '12x^3'
        },
        // Calculus (Integration)
        {
            id: 'shsci1',
            title: 'Power Rule of Integration',
            level: 'shs',
            topic: 'Calculus - Integration',
            description: 'Integrate xⁿ',
            formula: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
            example: '\\int x^3 dx',
            solution: '\\frac{x^4}{4} + C'
        },
        {
            id: 'shsci2',
            title: 'Definite Integral',
            level: 'shs',
            topic: 'Calculus - Integration',
            description: 'Evaluate definite integral',
            formula: '\\int_a^b f(x)dx = F(b) - F(a)',
            example: '\\int_0^2 x^2 dx',
            solution: '\\frac{8}{3}'
        },
        // Vectors
        {
            id: 'shsv1',
            title: 'Vector Addition',
            level: 'shs',
            topic: 'Vectors',
            description: 'Add vectors component-wise',
            formula: '\\vec{a} + \\vec{b} = (a_1+b_1)\\hat{i} + (a_2+b_2)\\hat{j}',
            example: '\\langle 3,4 \\rangle + \\langle 2,5 \\rangle',
            solution: '\\langle 5, 9 \\rangle'
        },
        {
            id: 'shsv2',
            title: 'Magnitude of a Vector',
            level: 'shs',
            topic: 'Vectors',
            description: 'Find magnitude of a vector',
            formula: '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2}',
            example: '\\text{Magnitude of } \\langle 3, 4 \\rangle',
            solution: '5'
        },
        // Matrices
        {
            id: 'shsm1',
            title: 'Matrix Addition',
            level: 'shs',
            topic: 'Matrices',
            description: 'Add matrices of same dimensions',
            formula: 'A + B = [a_{ij} + b_{ij}]',
            example: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\ 7 & 8 \\end{pmatrix}',
            solution: '\\begin{pmatrix} 6 & 8 \\\ 10 & 12 \\end{pmatrix}'
        },
        {
            id: 'shsm2',
            title: '2×2 Matrix Determinant',
            level: 'shs',
            topic: 'Matrices',
            description: 'Find determinant of 2×2 matrix',
            formula: '\\det\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc',
            example: '\\det\\begin{pmatrix} 3 & 2 \\\ 1 & 4 \\end{pmatrix}',
            solution: '10'
        }
    ];

    // ========================================================================
    // GAME QUESTIONS DATABASE - 55+ questions
    // ========================================================================
    const gameQuestions = [
        // ===================== MATCH MODE QUESTIONS =====================
        // JHS Match Questions
        {
            type: 'match',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            question: 'a + b = b + a \\text{ is: }',
            options: ['\\text{Associative Property}', '\\text{Commutative Property}', '\\text{Distributive Property}', '\\text{Identity Property}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            question: '(a + b) + c = a + (b + c) \\text{ is: }',
            options: ['\\text{Commutative Property}', '\\text{Associative Property}', '\\text{Distributive Property}', '\\text{Identity Property}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Fractions',
            question: '\\text{Add fractions with same denominator: }',
            options: ['\\text{Add denominators}', '\\text{Add numerators}', '\\text{Multiply denominators}', '\\text{Subtract numerators}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Fractions',
            question: '\\text{Multiply two fractions: }',
            options: ['\\text{Add numerators and denominators}', '\\text{Multiply numerators, multiply denominators}', '\\text{Divide numerators}', '\\text{Subtract denominators}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Percentages',
            question: '25\\% =',
            options: ['0.25', '2.5', '25', '0.025'],
            correct: 0
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Percentages',
            question: '15\\% \\text{ of GHS } 200 =',
            options: ['15 \\times 200', '\\frac{15}{100} \\times 200', '\\frac{200}{15} \\times 100', '15 \\times 2'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Ratios',
            question: '\\text{Ratio } 3:2, 15 \\text{ boys, girls = }',
            options: ['10', '12', '8', '6'],
            correct: 0
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: 'A = l \\times w, l = 8, w = 5 \\text{ gives: }',
            options: ['13 cm^2', '26 cm^2', '40 cm^2', '80 cm^2'],
            correct: 2
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: 'C =',
            options: ['\\pi r^2', '2\\pi r', '\\pi d^2', '\\pi d'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Statistics',
            question: '\\text{Mode is: }',
            options: ['\\text{The middle value}', '\\text{The most frequent value}', '\\text{The average}', '\\text{The range}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Statistics',
            question: '\\text{Median is: }',
            options: ['\\text{Sum divided by count}', '\\text{The middle value when arranged}', '\\text{The most common}', '\\text{Difference between max and min}'],
            correct: 1
        },
        {
            type: 'match',
            level: 'jhs',
            topic: 'Introduction to Algebra',
            question: 'x^3 \\times x^4 =',
            options: ['x^7', 'x^{12}', 'x^5', 'x^6'],
            correct: 0
        },
// SHS Match Questions
        {
            type: 'match',
            level: 'shs',
            topic: 'Quadratic Equations',
            question: '\\text{The quadratic formula is: } x =',
            options: ['\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}', 'x = \\frac{c-b}{a}', 'x = \\frac{-b}{2a}', 'x = \\pm \\sqrt{c}'],
            correct: 0
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\sin^2\\theta + \\cos^2\\theta =',
            options: ['0', '1', '2', '-1'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\tan\\theta =',
            options: ['\\sin\\theta \\cos\\theta', '\\frac{\\sin\\theta}{\\cos\\theta}', '\\frac{\\cos\\theta}{\\sin\\theta}', '\\sin\\theta + \\cos\\theta'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\text{The Sine Rule relates: }',
            options: ['\\text{Angles only}', '\\text{Sides only}', '\\text{Angles and sides}', '\\text{Perimeters}'],
            correct: 2
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: '\\log(ab) =',
            options: ['\\log a \\times \\log b', '\\log a + \\log b', '\\log a - \\log b', '\\log a / \\log b'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Coordinate Geometry',
            question: '\\text{The distance formula is: } d =',
            options: ['\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}', '\\frac{x_1+x_2}{2}', '\\sqrt{(x_2+x_1)^2 - (y_2-y_1)^2}', 'y = mx + c'],
            correct: 0
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Probability',
            question: '\\text{Probability ranges from: }',
            options: ['-1 \\text{ to } 1', '0 \\text{ to } 1', '1 \\text{ to } 100', '0 \\text{ to } 100'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            question: '\\frac{d}{dx}(x^5) =',
            options: ['x^5', '5x^4', '5x^5', 'x^4'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Calculus - Integration',
            question: '\\int x^n \\text{ dx } =',
            options: ['nx^{n-1}', '\\frac{x^{n+1}}{n+1} + C', 'x^n + C', 'x^{n-1} + C'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Vectors',
            question: '|\\langle 3,4 \\rangle| =',
            options: ['7', '5', '6', '12'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: 'sin²θ + cos²θ = ?',
            options: ['0', '1', '2', '-1'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: 'tanθ equals:',
            options: ['sinθ × cosθ', 'sinθ / cosθ', 'cosθ / sinθ', 'sinθ + cosθ'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Trigonometry',
            question: 'The Sine Rule relates:',
            options: ['Angles only', 'Sides only', 'Angles and sides', 'Perimeters'],
            correct: 2
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Sets & Venn Diagrams',
            question: 'If A ∩ B = ∅, the sets are:',
            options: ['Equal', 'Disjoint', 'Subsets', 'Complements'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: 'If 2³ = 8, then log₂8 = ?',
            options: ['2', '3', '8', '1'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: 'log(ab) = ?',
            options: ['log a × log b', 'log a + log b', 'log a - log b', 'log a / log b'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Coordinate Geometry',
            question: 'The distance formula is:',
            options: ['√((x₂-x₁)² + (y₂-y₁)²)', '(x₁+x₂)/2', '√((x₂+x₁)² - (y₂-y₁)²)', 'y = mx + c'],
            correct: 0
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Probability',
            question: 'Probability always ranges from:',
            options: ['-1 to 1', '0 to 1', '1 to 100', '0 to 100'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            question: 'd/dx(x⁵) = ?',
            options: ['x⁵', '5x⁴', '5x⁵', 'x⁴'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Calculus - Integration',
            question: '∫xⁿdx (n≠-1) = ?',
            options: ['nxⁿ⁻¹', 'xⁿ⁺¹/(n+1) + C', 'xⁿ + C', 'xⁿ⁻¹ + C'],
            correct: 1
        },
        {
            type: 'match',
            level: 'shs',
            topic: 'Vectors',
            question: 'The magnitude of vector ⟨3,4⟩ is:',
            options: ['7', '5', '6', '12'],
            correct: 1
        },
        // ===================== FILL BLANK MODE QUESTIONS =====================
        // JHS Fill Blank Questions
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Percentages',
            question: '25\\% \\text{ of GHS } 80 = \\text{GHS } ___',
            answer: '20'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Percentages',
            question: '\\text{GHS } 60 \\text{ is } 20\\% \\text{ of GHS } ___',
            answer: '300'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: '\\text{Area of rectangle } 6cm \\times 4cm = ___ cm^2',
            answer: '24'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: '\\text{Perimeter of square with side } 5cm = ___ cm',
            answer: '20'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Statistics',
            question: '\\text{Mean of } 10, 20, 30: ___',
            answer: '20'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Ratios',
            question: '\\text{Ratio } 8:4 \\text{ simplifies to } ___',
            answer: '2:1'
        },
        {
            type: 'fill',
            level: 'jhs',
            topic: 'Fractions',
            question: '\\frac{1}{2} + \\frac{1}{4} = ___',
            answer: '0.75'
        },
        // SHS Fill Blank Questions
        {
            type: 'fill',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\text{If } \\sin\\theta = \\frac{1}{2}, \\text{ then } \\theta = ___^\\circ',
            answer: '30'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\cos(90^\\circ - \\theta) = \\sin ___',
            answer: '\\theta'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: '\\log_{10}(100) = ___',
            answer: '2'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: '3^4 = ___',
            answer: '81'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Quadratic Equations',
            question: 'x^2 - 9 = (x+___)(x-___)',
            answer: '3'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            question: '\\frac{d}{dx}(3x^2) = ___x',
            answer: '6'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Calculus - Integration',
            question: '\\int 2x \\text{ dx } = x^2 + ___',
            answer: 'C'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Vectors',
            question: '\\langle 2,3 \\rangle + \\langle 1,1 \\rangle = \\langle ___, ___ \\rangle',
            answer: '3,4'
        },
        {
            type: 'fill',
            level: 'shs',
            topic: 'Matrices',
            question: '\\det\\begin{pmatrix} 2 & 1 \\\ 3 & 4 \\end{pmatrix} = ___',
            answer: '5'
        },
        // ===================== QUICK CALCULATION MODE QUESTIONS =====================
        // JHS Calculation Questions
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            question: '\\text{What is } 50\\% \\text{ of GHS } 240?',
            answer: '120'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Basic Arithmetic',
            question: '\\frac{1}{5} + \\frac{2}{5}',
            answer: '0.6'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Percentages',
            question: '\\text{Increase GHS } 100 \\text{ by } 10\\%',
            answer: '110'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Percentages',
            question: '\\text{Decrease } 80 \\text{ by } 25\\%',
            answer: '60'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Ratios',
            question: '\\text{Divide GHS } 90 \\text{ in ratio } 2:1',
            answer: '60'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: '\\text{Area of triangle: } b = 6, h = 4',
            answer: '12'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Area/Perimeter',
            question: '\\text{Circumference: } r = 7, \\pi = \\frac{22}{7}',
            answer: '44'
        },
        {
            type: 'calc',
            level: 'jhs',
            topic: 'Statistics',
            question: '\\text{Mean of } 5, 10, 15',
            answer: '10'
        },
        // SHS Calculation Questions
        {
            type: 'calc',
            level: 'shs',
            topic: 'Quadratic Equations',
            question: 'x^2 = 16, x =',
            answer: '4'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\sin(90^\\circ) =',
            answer: '1'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\cos(0^\\circ) =',
            answer: '1'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Trigonometry',
            question: '\\tan(45^\\circ) =',
            answer: '1'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Indices & Logarithms',
            question: '\\log_2(32) =',
            answer: '5'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Coordinate Geometry',
            question: '\\text{Distance: } (0,0) \\text{ to } (3,4)',
            answer: '5'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Coordinate Geometry',
            question: '\\text{Midpoint of } (2,4) \\text{ and } (6,8)',
            answer: '(4,6)'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Probability',
            question: 'P(\\text{selecting heart}) =',
            answer: '0.25'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Calculus - Differentiation',
            question: '\\frac{d}{dx}(x^3 + 2x^2)',
            answer: '3x^2+4x'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Calculus - Integration',
            question: '\\int (2x + 1)dx',
            answer: '2'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Vectors',
            question: '\\langle 1,2 \\rangle \\cdot \\langle 3,4 \\rangle',
            answer: '11'
        },
        {
            type: 'calc',
            level: 'shs',
            topic: 'Matrices',
            question: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\times \\begin{pmatrix} 2 & 3 \\\ 4 & 5 \\end{pmatrix}',
            answer: '2,3'
        }
    ];

    // ========================================================================
    // APPLICATION STATE
    // ========================================================================
    const state = {
        studentName: '',
        loggedIn: false,
        currentTab: 'formulas',
        theme: 'light',
        selectedLevel: 'all',
        selectedTopic: 'all',
        searchQuery: '',
        
        // Game state
        gameMode: 'match',
        gameLevel: 'jhs',
        score: 0,
        streak: 0,
        timer: 60,
        gameActive: false,
        currentQuestion: 0,
        gameQuestions: [],
        
        // Progress
        viewedFormulas: [],
        gameScores: {
            jhs: { gold: 0, silver: 0, bronze: 0 },
            shs: { gold: 0, silver: 0, bronze: 0 }
        },
        completedLevels: {}
    };

    // ========================================================================
    // DOM ELEMENTS
    // ========================================================================
    let elements = {};

    // ========================================================================
    // UTILITY FUNCTIONS
    // ========================================================================
    function initElements() {
        elements = {
            app: document.getElementById('app'),
            themeToggle: document.getElementById('themeToggle'),
            studentName: document.getElementById('studentName'),
            loginBtn: document.getElementById('loginBtn'),
            searchInput: document.getElementById('searchInput'),
            levelFilter: document.getElementById('levelFilter'),
            topicFilter: document.getElementById('topicFilter'),
            formulasGrid: document.getElementById('formulasGrid'),
            topicsProgress: document.getElementById('topicsProgress'),
            leaderboardList: document.getElementById('leaderboardList'),
            leaderboardLevel: document.getElementById('leaderboardLevel'),
            gameLevel: document.getElementById('gameLevel'),
            startGameBtn: document.getElementById('startGameBtn'),
            gameArea: document.getElementById('gameArea'),
            gameResult: document.getElementById('gameResult'),
            gameSetup: document.querySelector('.game-setup'),
            score: document.getElementById('score'),
            timer: document.getElementById('timer'),
            streak: document.getElementById('streak'),
            gameQuestion: document.getElementById('gameQuestion'),
            gameOptions: document.getElementById('gameOptions'),
            gameFeedback: document.getElementById('gameFeedback'),
            quitGameBtn: document.getElementById('quitGameBtn'),
            playAgainBtn: document.getElementById('playAgainBtn'),
            backToMenuBtn: document.getElementById('backToMenuBtn'),
            finalScore: document.getElementById('finalScore'),
            accuracy: document.getElementById('accuracy'),
            medal: document.getElementById('medal'),
            offlineStatus: document.getElementById('offlineStatus'),
            offlineBanner: document.getElementById('offlineBanner'),
            topicsViewed: document.getElementById('topicsViewed'),
            goldMedals: document.getElementById('goldMedals'),
            silverMedals: document.getElementById('silverMedals'),
            bronzeMedals: document.getElementById('bronzeMedals')
        };
    }

    function getTopicsForLevel(level) {
        const topics = new Set();
        formulas.forEach(f => {
            if (level === 'all' || f.level === level) {
                topics.add(f.topic);
            }
        });
        return Array.from(topics).sort();
    }

    function renderTopicsFilter() {
        const level = elements.levelFilter.value;
        const topics = getTopicsForLevel(level);
        
        elements.topicFilter.innerHTML = '<option value="all">All Topics</option>';
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            elements.topicFilter.appendChild(option);
        });
    }

    function renderFormulas() {
        const filtered = formulas.filter(f => {
            const matchLevel = state.selectedLevel === 'all' || f.level === state.selectedLevel;
            const matchTopic = state.selectedTopic === 'all' || f.topic === state.selectedTopic;
            const matchSearch = state.searchQuery === '' || 
                f.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                f.topic.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                f.description.toLowerCase().includes(state.searchQuery.toLowerCase());
            return matchLevel && matchTopic && matchSearch;
        });

        elements.formulasGrid.innerHTML = '';
        
        if (filtered.length === 0) {
            elements.formulasGrid.innerHTML = '<p class="no-results">No formulas found</p>';
            return;
        }

        filtered.forEach(formula => {
            const isViewed = state.viewedFormulas.includes(formula.id);
            const card = document.createElement('div');
            card.className = 'formula-card';
            card.innerHTML = `
                ${isViewed ? '<span class="viewed-indicator"><i class="fas fa-check-circle"></i></span>' : ''}
                <div class="formula-card-header">
                    <span class="level-badge">${formula.level.toUpperCase()}</span>
                    <span class="topic-badge">${formula.topic}</span>
                </div>
                <div class="formula-card-body">
                    <h3 class="formula-title">${formula.title}</h3>
                    <div class="formula-latex" data-formula="${formula.formula}"></div>
                    <p class="formula-description">${formula.description}</p>
                    <div class="formula-example">
                        <div class="example-label">Example</div>
                        <div class="example-problem" data-formula="${formula.example}"></div>
                        <div class="example-solution" data-formula="${formula.solution}"></div>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => markFormulaViewed(formula.id));
            elements.formulasGrid.appendChild(card);
        });

        renderMathInElements();
    }

    function renderMathInElements() {
        const elements = document.querySelectorAll('.formula-latex, .example-problem, .example-solution');
        if (elements.length === 0) return;
        
        if (typeof katex === 'undefined') {
            elements.forEach(el => {
                const formula = el.getAttribute('data-formula');
                if (formula) el.innerHTML = formula;
            });
            return;
        }
        
        elements.forEach(el => {
            const formula = el.getAttribute('data-formula');
            if (!formula) return;
            
            try {
                const html = katex.renderToString(formula, {
                    throwOnError: false,
                    displayMode: el.classList.contains('formula-latex'),
                    leqno: false,
                    fleqn: false,
                    trust: false,
                    strict: false
                });
                el.innerHTML = html;
            } catch (e) {
                el.innerHTML = formula;
            }
        });
    }

    function markFormulaViewed(id) {
        if (!state.viewedFormulas.includes(id)) {
            state.viewedFormulas.push(id);
            localStorage.setItem('viewedFormulas', JSON.stringify(state.viewedFormulas));
            renderProgress();
            renderFormulas();
        }
    }

    function filterFormulas() {
        state.selectedLevel = elements.levelFilter.value;
        state.selectedTopic = elements.topicFilter.value;
        state.searchQuery = elements.searchInput.value;
        renderFormulas();
    }

    // ==============================================================================
    // TAB NAVIGATION
    // ==============================================================================
    function handleTabSwitch(tabName) {
        state.currentTab = tabName;
        
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        document.getElementById(`${tabName}-tab`).classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        if (tabName === 'game') {
            document.querySelector('.user-login').style.display = state.loggedIn ? 'none' : 'block';
        }
    }

    // ==============================================================================
    // USER AUTHENTICATION
    // ==============================================================================
    function handleLogin() {
        const name = elements.studentName.value.trim();
        if (name) {
            state.studentName = name;
            state.loggedIn = true;
            localStorage.setItem('studentName', name);
            loadProgress();
            document.querySelector('.user-login').style.display = 'none';
        }
    }

    function loadProgress() {
        const savedName = localStorage.getItem('studentName');
        if (savedName) {
            state.studentName = savedName;
            state.loggedIn = true;
            elements.studentName.value = savedName;
            document.querySelector('.user-login').style.display = 'none';
        }

        const viewed = localStorage.getItem('viewedFormulas');
        if (viewed) {
            state.viewedFormulas = JSON.parse(viewed);
        }

        const scores = localStorage.getItem('gameScores');
        if (scores) {
            state.gameScores = JSON.parse(scores);
        }

        const completed = localStorage.getItem('completedLevels');
        if (completed) {
            state.completedLevels = JSON.parse(completed);
        }
    }

    function saveProgress() {
        localStorage.setItem('viewedFormulas', JSON.stringify(state.viewedFormulas));
        localStorage.setItem('gameScores', JSON.stringify(state.gameScores));
        localStorage.setItem('completedLevels', JSON.stringify(state.completedLevels));
    }

    // ==============================================================================
    // THEME MANAGEMENT
    // ==============================================================================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            state.theme = savedTheme;
        } else if (systemPrefersDark) {
            state.theme = 'dark';
        }
        
        applyTheme();
    }

    function applyTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        const icon = state.theme === 'dark' ? 'fa-sun' : 'fa-moon';
        elements.themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    }

    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.theme);
        applyTheme();
    }

    // ==============================================================================
    // GAME ENGINE
    // ==============================================================================
    function selectGameMode(mode) {
        state.gameMode = mode;
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    }

    function startGame() {
        state.gameLevel = elements.gameLevel.value;
        state.score = 0;
        state.streak = 0;
        state.timer = 60;
        state.gameActive = true;
        state.currentQuestion = 0;

        state.gameQuestions = gameQuestions
            .filter(q => q.level === state.gameLevel)
            .sort(() => Math.random() - 0.5)
            .slice(0, 10 + Math.floor(Math.random() * 10));

        if (state.gameMode === 'match') {
            const matched = gameQuestions.filter(q => q.type === 'match' && q.level === state.gameLevel);
            state.gameQuestions = matched.sort(() => Math.random() - 0.5).slice(0, 10);
        } else if (state.gameMode === 'fill') {
            const filled = gameQuestions.filter(q => q.type === 'fill' && q.level === state.gameLevel);
            state.gameQuestions = filled.sort(() => Math.random() - 0.5).slice(0, 10);
        } else {
            const calced = gameQuestions.filter(q => q.type === 'calc' && q.level === state.gameLevel);
            state.gameQuestions = calced.sort(() => Math.random() - 0.5).slice(0, 10);
        }

        elements.gameSetup.style.display = 'none';
        elements.gameArea.style.display = 'block';
        elements.gameResult.style.display = 'none';

        elements.score.textContent = '0';
        elements.timer.textContent = '60s';

        showQuestion();
        startTimer();
    }

    function startTimer() {
        const interval = setInterval(() => {
            if (!state.gameActive) {
                clearInterval(interval);
                return;
            }
            state.timer--;
            elements.timer.textContent = state.timer + 's';

            if (state.timer <= 0) {
                clearInterval(interval);
                endGame();
            }
        }, 1000);
    }

    function showQuestion() {
        if (state.currentQuestion >= state.gameQuestions.length) {
            endGame();
            return;
        }

        const q = state.gameQuestions[state.currentQuestion];
        
        if (state.gameMode === 'match') {
            showMatchQuestion(q);
        } else if (state.gameMode === 'fill') {
            showFillQuestion(q);
        } else {
            showCalcQuestion(q);
        }

        elements.gameQuestion.dataset.answer = q.answer || q.options[q.correct];
    }

    function showMatchQuestion(q) {
        elements.gameQuestion.innerHTML = `
            <div class="question-type">Match Mode - ${q.topic}</div>
            <div class="question-text" data-formula="${q.question}"></div>
        `;
        
        elements.gameOptions.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = 'game-option';
            btn.dataset.formula = opt;
            btn.addEventListener('click', () => handleAnswer(q.correct === i, i));
            elements.gameOptions.appendChild(btn);
        });
        
        renderGameMath();
        elements.gameFeedback.innerHTML = '';
    }

    function showFillQuestion(q) {
        elements.gameQuestion.innerHTML = `
            <div class="question-type">Fill Mode - ${q.topic}</div>
            <div class="question-text" data-formula="${q.question}"></div>
            <input type="text" id="fillAnswer" class="fill-input" placeholder="Your answer" autocomplete="off">
        `;
        
        elements.gameOptions.innerHTML = '';
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.textContent = 'Submit Answer';
        submitBtn.addEventListener('click', () => {
            const userAns = document.getElementById('fillAnswer').value.trim().toLowerCase();
            const correct = q.answer.toLowerCase().includes(userAns);
            handleAnswer(correct, -1);
        });
        elements.gameOptions.appendChild(submitBtn);
        
        const input = document.getElementById('fillAnswer');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitBtn.click();
        });
        
        renderGameMath();
        elements.gameFeedback.innerHTML = '';
    }

    function showCalcQuestion(q) {
        elements.gameQuestion.innerHTML = `
            <div class="question-type">Calculation Mode - ${q.topic}</div>
            <div class="question-text" data-formula="${q.question}"></div>
            <input type="text" id="calcAnswer" class="fill-input" placeholder="Your answer" autocomplete="off">
        `;
        
        elements.gameOptions.innerHTML = '';
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.textContent = 'Submit Answer';
        submitBtn.addEventListener('click', () => {
            const userAns = document.getElementById('calcAnswer').value.trim().toLowerCase();
            const correctAns = q.answer.toLowerCase();
            const correct = correctAns === userAns;
            handleAnswer(correct, -1);
        });
        elements.gameOptions.appendChild(submitBtn);
        
        const input = document.getElementById('calcAnswer');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitBtn.click();
        });
        
        renderGameMath();
        elements.gameFeedback.innerHTML = '';
    }
    
    function renderGameMath() {
        const elements = document.querySelectorAll('.question-text[data-formula], .game-option[data-formula]');
        if (elements.length === 0) return;
        
        elements.forEach(el => {
            const formula = el.getAttribute('data-formula');
            if (!formula) return;
            
            if (typeof katex !== 'undefined') {
                try {
                    const html = katex.renderToString(formula, {
                        throwOnError: false,
                        displayMode: false,
                        leqno: false,
                        fleqn: false,
                        trust: false,
                        strict: false
                    });
                    el.innerHTML = html;
                    el.removeAttribute('data-formula');
                } catch (e) {
                    el.innerHTML = formula;
                }
            }
        });
    }

    function handleAnswer(correct, selectedIndex) {
        if (correct) {
            state.score += 10;
            state.streak++;
            elements.gameFeedback.textContent = 'Correct! +10 points';
            elements.gameFeedback.className = 'game-feedback correct';
        } else {
            state.score = Math.max(0, state.score - 5);
            state.streak = 0;
            const actualAnswer = elements.gameQuestion.dataset.answer;
            elements.gameFeedback.textContent = `Wrong! Answer: ${actualAnswer}`;
            elements.gameFeedback.className = 'game-feedback wrong';
        }

        elements.score.textContent = state.score;
        elements.streak.textContent = state.streak;

        document.querySelectorAll('.game-option').forEach((opt, i) => {
            if (selectedIndex >= 0) {
                if (i === selectedIndex) {
                    opt.classList.add(correct ? 'correct' : 'wrong');
                }
                if (i === elements.gameQuestion.dataset.answerIndex || 
                    (correct && i !== selectedIndex)) {
                    opt.classList.add('correct');
                }
                opt.classList.add('disabled');
            }
        });

        setTimeout(() => {
            state.currentQuestion++;
            showQuestion();
        }, 1500);
    }

    function endGame() {
        state.gameActive = false;
        elements.gameArea.style.display = 'none';
        elements.gameResult.style.display = 'block';

        const totalQuestions = state.gameQuestions.length;
        const correctAnswers = Math.floor(state.score / 10);
        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

        elements.finalScore.textContent = state.score;
        elements.accuracy.textContent = accuracy + '%';

        let medalType = '';
        if (accuracy >= 90) {
            elements.medal.innerHTML = '<i class="fas fa-medal gold"></i><p>Gold Medal!</p>';
            medalType = 'gold';
            state.gameScores[state.gameLevel].gold++;
        } else if (accuracy >= 80) {
            elements.medal.innerHTML = '<i class="fas fa-medal silver"></i><p>Silver Medal!</p>';
            medalType = 'silver';
            state.gameScores[state.gameLevel].silver++;
        } else if (accuracy >= 70) {
            elements.medal.innerHTML = '<i class="fas fa-medal bronze"></i><p>Bronze Medal!</p>';
            medalType = 'bronze';
            state.gameScores[state.gameLevel].bronze++;
        } else {
            elements.medal.innerHTML = '<p>Keep practicing!</p>';
        }

        const levelKey = `${state.gameLevel}_${state.gameMode}`;
        if (!state.completedLevels[levelKey] || accuracy > state.completedLevels[levelKey]) {
            state.completedLevels[levelKey] = accuracy;
        }

        saveProgress();
        updateLeaderboard();
        renderProgress();
    }

    function quitGame() {
        state.gameActive = false;
        elements.gameArea.style.display = 'none';
        elements.gameSetup.style.display = 'block';
        elements.gameResult.style.display = 'none';
    }

    // ==============================================================================
    // LEADERBOARD
    // ==============================================================================
    function getLeaderboard(level) {
        const scores = localStorage.getItem(`leaderboard_${level}`);
        return scores ? JSON.parse(scores) : [];
    }

    function updateLeaderboard() {
        if (!state.studentName) return;
        
        const level = state.gameLevel;
        const scores = getLeaderboard(level);
        
        scores.push({
            name: state.studentName,
            score: state.score,
            date: Date.now()
        });

        scores.sort((a, b) => b.score - a.score);
        const top10 = scores.slice(0, 10);
        
        localStorage.setItem(`leaderboard_${level}`, JSON.stringify(top10));
        renderLeaderboard();
    }

    function renderLeaderboard() {
        const level = elements.leaderboardLevel.value;
        const scores = getLeaderboard(level);

        elements.leaderboardList.innerHTML = '';
        
        if (scores.length === 0) {
            elements.leaderboardList.innerHTML = '<p class="no-results">No scores yet. Play a game!</p>';
            return;
        }

        scores.forEach((entry, i) => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item';
            
            let rankClass = 'other';
            if (i === 0) rankClass = 'gold';
            else if (i === 1) rankClass = 'silver';
            else if (i === 2) rankClass = 'bronze';
            
            item.innerHTML = `
                <span class="leaderboard-rank ${rankClass}">${i + 1}</span>
                <span class="leaderboard-name">${entry.name}</span>
                <span class="leaderboard-score">${entry.score}</span>
            `;
            elements.leaderboardList.appendChild(item);
        });
    }

    // ==============================================================================
    // PROGRESS TRACKING
    // ==============================================================================
    function renderProgress() {
        const viewedTopics = new Set();
        state.viewedFormulas.forEach(id => {
            const formula = formulas.find(f => f.id === id);
            if (formula) viewedTopics.add(formula.topic);
        });

        elements.topicsViewed.textContent = viewedTopics.size;
        elements.goldMedals.textContent = state.gameScores.jhs.gold + state.gameScores.shs.gold;
        elements.silverMedals.textContent = state.gameScores.jhs.silver + state.gameScores.shs.silver;
        elements.bronzeMedals.textContent = state.gameScores.jhs.bronze + state.gameScores.shs.bronze;

        renderTopicsProgress();
    }

    function renderTopicsProgress() {
        const allTopics = getTopicsForLevel('all');
        elements.topicsProgress.innerHTML = '';

        allTopics.forEach(topic => {
            const isViewed = state.viewedFormulas.some(id => {
                const f = formulas.find(form => form.id === id);
                return f && f.topic === topic;
            });

            const card = document.createElement('div');
            card.className = 'topic-progress-card';
            
            const viewIcon = isViewed ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>';
            
            const medals = getTopicMedals(topic);
            
            card.innerHTML = `
                <div class="topic-name">${viewIcon} ${topic}</div>
                <div class="medals">
                    ${medals.gold ? '<i class="fas fa-medal gold"></i>' : '<span></span>'}
                    ${medals.silver ? '<i class="fas fa-medal silver"></i>' : '<span></span>'}
                    ${medals.bronze ? '<i class="fas fa-medal bronze"></i>' : '<span></span>'}
                </div>
            `;
            elements.topicsProgress.appendChild(card);
        });
    }

    function getTopicMedals(topic) {
        const level = topic === 'Basic Arithmetic' || topic === 'Fractions' || 
                      topic === 'Percentages' || topic === 'Ratios' || 
                      topic === 'Simple Equations' || topic === 'Area/Perimeter' ||
                      topic === 'Statistics' || topic === 'Introduction to Algebra' ? 'jhs' : 'shs';
        
        let medals = { gold: false, silver: false, bronze: false };
        
        const levelKey = `${level}_match`;
        const score = state.completedLevels[levelKey] || 0;
        
        if (score >= 90) medals.gold = true;
        else if (score >= 80) medals.silver = true;
        else if (score >= 70) medals.bronze = true;
        
        return medals;
    }

    // ==============================================================================
    // OFFLINE SUPPORT
    // ==============================================================================
    function initServiceWorker() {
        if (!window.location.protocol.startsWith('http')) {
            console.log('MathFormulaGame: Must be served via HTTP for PWA features');
            return;
        }
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('SW registered'))
                .catch(err => console.log('SW registration failed:', err));
        }

        window.addEventListener('online', () => {
            elements.offlineBanner.style.display = 'none';
            elements.offlineStatus.innerHTML = '<i class="fas fa-wifi"></i> Online';
            elements.offlineStatus.classList.remove('offline');
        });

        window.addEventListener('offline', () => {
            elements.offlineBanner.style.display = 'flex';
            elements.offlineStatus.innerHTML = '<i class="fas fa-wifi-slash"></i> Offline';
            elements.offlineStatus.classList.add('offline');
        });
    }

    // ==============================================================================
    // EVENT LISTENERS
    // ==============================================================================
    function bindEvents() {
        elements.themeToggle.addEventListener('click', toggleTheme);
        
        elements.loginBtn.addEventListener('click', handleLogin);
        elements.studentName.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });

        elements.levelFilter.addEventListener('change', () => {
            renderTopicsFilter();
            filterFormulas();
        });
        
        elements.topicFilter.addEventListener('change', filterFormulas);
        elements.searchInput.addEventListener('input', filterFormulas);

        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => handleTabSwitch(tab.dataset.tab));
        });

        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => selectGameMode(card.dataset.mode));
        });

        elements.startGameBtn.addEventListener('click', startGame);
        elements.quitGameBtn.addEventListener('click', quitGame);
        elements.playAgainBtn.addEventListener('click', () => {
            elements.gameResult.style.display = 'none';
            elements.gameSetup.style.display = 'block';
        });
        elements.backToMenuBtn.addEventListener('click', quitGame);

        elements.leaderboardLevel.addEventListener('change', renderLeaderboard);
    }

    // ==============================================================================
    // INITIALIZATION
    // ==============================================================================
    function init() {
        initElements();
        initTheme();
        loadProgress();
        renderTopicsFilter();
        renderFormulas();
        renderProgress();
        renderLeaderboard();
        bindEvents();
        initServiceWorker();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();