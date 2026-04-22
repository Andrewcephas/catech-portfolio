
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(5002);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Fetch current visit count from database
    const fetchVisitCount = async () => {
      try {
        const { data, error } = await supabase
          .from('site_visits')
          .select('count')
          .order('created_at')
          .limit(1)
          .single();

        if (error) {
          console.error('Error fetching visit count:', error);
          return;
        }

        if (data) {
          setVisitCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visit count:', error);
      }
    };

    // Increment visit count (only once per session)
    const incrementVisitCount = async () => {
      if (hasIncremented) return;

      try {
        const { data, error } = await supabase.rpc('increment_visit_count');

        if (error) {
          console.error('Error incrementing visit count:', error);
          return;
        }

        if (data) {
          setVisitCount(data);
          setHasIncremented(true);
        }
      } catch (error) {
        console.error('Error incrementing visit count:', error);
      }
    };

    // Initial fetch and increment
    fetchVisitCount().then(() => {
      incrementVisitCount();
    });

    // Set up real-time subscription to listen for changes
    const channel = supabase
      .channel('visit-counter-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'site_visits'
        },
        (payload) => {
          console.log('Visit count updated:', payload);
          if (payload.new && payload.new.count) {
            setVisitCount(payload.new.count);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [hasIncremented]);

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 bg-white/90 backdrop-blur-xl rounded-lg px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 shadow-lg border border-white/20">
      <Eye size={10} className="text-[#007520] sm:w-3 sm:h-3 md:w-4 md:h-4" />
      <span className="text-[8px] sm:text-[10px] md:text-sm font-semibold text-gray-700">
        {visitCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitCounter;
