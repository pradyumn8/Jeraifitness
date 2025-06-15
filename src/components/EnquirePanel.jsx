import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const EnquirePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [result, setResult] = useState('');

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setActiveTab('form');
    setResult(''); 
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", "3ff8451d-180d-4e59-af3b-38e6d95c713b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Network error", err);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Red Circle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 left-4 z-50 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700"
        aria-label="Enquire Now"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>

      {/* Enquiry Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 w-[90%] max-w-sm bg-white rounded-xl shadow-2xl z-50 flex flex-col justify-between max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 text-lg font-semibold text-red-600">
            {activeTab === 'form' ? 'Enquire Now' : 'Messages'}
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto flex-1">
            {activeTab === 'form' && (
              <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <input type="text" name="name" placeholder="Name" required className="border  p-2 rounded" />
                <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
                <textarea name="message" placeholder="Message" rows="3" required className="border p-2 rounded" />
                
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-red-700 disabled:opacity-70"
                  disabled={result === "Sending..."}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {result || 'Submit'}
                </button>
              </form>
            )}

            {activeTab === 'message' && (
              <div className="text-gray-500 text-center py-10">No recent conversations</div>
            )}
          </div>

          {/* Footer Tabs */}
          <div className="flex justify-around border-t border-gray-200">
            <button
              className={`flex-1 py-3 text-center ${activeTab === 'form' ? 'text-red-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('form')}
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
            </button>
            <button
              className={`flex-1 py-3 text-center ${activeTab === 'message' ? 'text-red-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('message')}
            >
              <FontAwesomeIcon icon={faCommentDots} size="lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquirePanel;
