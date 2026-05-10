import type { ComponentType, SVGProps } from 'react'
import { AktionspotentialGraph, SynapseDiagram } from './Subject01SVGs'
import { FigureGrundReversibilitaet, GestaltgesetzeDemo } from './Subject02SVGs'
import { ArbeitsgedaechtnisModell } from './Subject03SVGs'
import { KonditionierungVergleich } from './Subject04SVGs'
import { BISMatrixSVG } from './Subject05SVGs'
import { PiagetStagesSVG } from './Subject06SVGs'
import { AttributionFlowSVG } from './Subject07SVGs'
import { BigFiveDimensionsSVG } from './Subject08SVGs'
import { Subject09SVG1 } from './Subject09SVGs'
import { Subject10SVG1 } from './Subject10SVGs'
import { Subject11SVG1, Subject11SVG2 } from './Subject11SVGs'
import { Subject12SVG1, Subject12SVG2 } from './Subject12SVGs'

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>

export const articleIllustrationRegistry: Record<string, SvgComponent> = {
  '01-visual-1': AktionspotentialGraph,
  '01-visual-2': SynapseDiagram,
  '02-visual-1': GestaltgesetzeDemo,
  '02-visual-2': FigureGrundReversibilitaet,
  '03-visual-1': ArbeitsgedaechtnisModell,
  '04-visual-1': KonditionierungVergleich,
  '05-visual-1': BISMatrixSVG,
  '06-visual-1': PiagetStagesSVG,
  '07-visual-1': AttributionFlowSVG,
  '08-visual-1': BigFiveDimensionsSVG,
  '09-visual-1': Subject09SVG1,
  '10-visual-1': Subject10SVG1,
  '11-visual-1': Subject11SVG1,
  '11-visual-2': Subject11SVG2,
  '12-visual-1': Subject12SVG1,
  '12-visual-2': Subject12SVG2,
}
