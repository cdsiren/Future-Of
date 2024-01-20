import { Transition } from '@headlessui/react';
import Image from 'next/image';

const Accordion = (props:any) => {

  return (
    <div className={`${props.className} accordion`}>
      <div className="accordion-item">
        <Transition
          show={props.isOpen}
          enter="transition ease-out duration-400"
          enterFrom="opacity-0 max-h-0"
          enterTo="opacity-100 max-h-full"
          leave="transition ease-in duration-400"
          leaveFrom="opacity-100 max-h-full"
          leaveTo="opacity-0 max-h-0"
        >
          {(ref) => (
            <div className="flex justify-center" ref={ref}>
              <Image src={props.coverImage} alt="img" width={400} height={400} />
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default Accordion;