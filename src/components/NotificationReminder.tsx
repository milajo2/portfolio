import { NOTIFICATION_CONTENT as text } from '../content/notifications';
import { getAssetPath } from '../utils/assets';

const NotificationReminder = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-background min-h-screen">
      <article className="w-full max-w-4xl flex flex-col gap-10 text-left">

        {/* Intro Section */}
        <section>
          <h1 className="text-4xl font-serif font-bold mb-6">{text.introTitle}</h1>
          <p className="whitespace-pre-line text-gray-800 leading-relaxed">{text.introBody}</p>
        </section>

        {/* Challenge Section - Unified Block Style */}
         <section className="bg-white/30 p-6 rounded-lg border border-black/5">
          <h2 className="text-2xl font-bold mb-4">{text.challengeTitle}</h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">{text.challengeBody}</p>
        </section>

        {/* Research & Survey Section */}
        <section>
          <h2 className="text-2xl font-bold border-b border-black/10 pb-2 mb-4">{text.researchTitle}</h2>
          <h3 className="text-xl font-semibold mb-2">{text.surveyTitle}</h3>
          <p className="mb-4">{text.surveyBody}</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {text.surveyStats.map((stat, i) => <li key={i}>{stat}</li>)}
          </ul>
          <blockquote className="italic border-l-4 border-black pl-4 my-8 text-lg">
            "{text.userQuote}"
          </blockquote>
        </section>

        {/* Competitive Analysis Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{text.analysisTitle}</h2>
          <p className="leading-relaxed text-gray-700">{text.analysisBody1}</p>
        </section>

        {/* Insights Section - Unified Block Style */}
         <section className="bg-white/30 p-6 rounded-lg border border-black/5">
          <h2 className="text-2xl font-bold mb-4">{text.insightsTitle}</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {text.insightsItems.map((insight, i) => (
              <li key={i} className="leading-relaxed">{insight}</li>
            ))}
          </ul>
        </section>

        {/* Ideation Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{text.ideationTitle}</h2>
          <p className="whitespace-pre-line leading-relaxed text-gray-700">{text.ideationBody}</p>
        </section>

        {/* Iterations Section - Consistent Border Separation */}
        <div className="flex flex-col gap-12 py-8 border-y border-black/5">
          <section>
            <h2 className="text-2xl font-bold mb-4">{text.iteration1Title}</h2>
            <p className="leading-relaxed text-gray-700">{text.iteration1Body}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">{text.finalIterationTitle}</h2>
            <p className="leading-relaxed text-gray-700">{text.finalIterationBody}</p>
          </section>
        </div>

        {/* Flow Design Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold border-b border-black/10 pb-2">Flow Design</h2>
          <p className="leading-relaxed text-gray-700">{text.flowDiagramIntro}</p>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <img
              src={getAssetPath('images/notifications/process-flow.png')}
              alt="Notification Flow Diagram"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="bg-white/50 p-6 rounded-lg border-l-4 border-gray-300">
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {text.flowDescription}
            </p>
          </div>
        </section>

        {/* Proposed App Section */}
        <section className="flex flex-col gap-8 pt-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold border-b border-black/10 pb-2">{text.proposedAppTitle}</h2>
            <p className="leading-relaxed text-gray-800">{text.proposedAppBody}</p>
          </div>
          <div className="w-full">
            <img
              src={getAssetPath('images/notifications/figma-flow.png')}
              alt="Notification Prototype"
              className="w-full h-auto rounded-xl shadow-md border border-gray-100"
            />
          </div>
        </section>

        {/* Visual Identity Section */}
        <section className="flex flex-col gap-10 pt-10 border-t border-black/10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{text.visualIdentity.title}</h2>
            <p className="text-gray-700 leading-relaxed">{text.visualIdentity.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Color Palette */}
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Colour</h3>
              <div className="flex flex-wrap gap-4">
                {text.visualIdentity.colors.map((color) => (
                  <div key={color.hex} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-full border border-black/5 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Typography</h3>
              <div className="flex flex-col gap-6">
                {text.visualIdentity.typography.map((type) => (
                  <div key={type.font} className="border-l-2 border-gray-200 pl-4">
                    <p className="text-xl font-sans font-medium">{type.font}</p>
                    <p className="text-xs text-gray-500 italic">{type.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Iconography */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Iconography</h3>
            <div className="flex justify-start">
              <img
                src={getAssetPath('images/notifications/icons.png')}
                alt="Icons"
              />
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="pb-16 pt-10 border-t border-black/10">
          <h2 className="text-2xl font-bold mb-4">{text.nextStepsTitle}</h2>
          <p className="mb-4 font-medium">{text.nextStepsBody}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {text.nextStepsItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

      </article>
    </div>
  );
};

export default NotificationReminder;
